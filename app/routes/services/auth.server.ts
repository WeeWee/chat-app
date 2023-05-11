import { sessionStore } from "./session.server";
import { Authenticator } from "remix-auth";
import { GoogleStrategy } from "remix-auth-google";
import { graphql } from "~/_gql";
import { createHasuraToken, hasuraAdminClient } from "./hasura.server";
import { env } from "./env.server";

type UserSession = {
  id: string;
  email: string;
  token: string;
};

export const authenticator = new Authenticator<UserSession>(sessionStore);

const CREATEORUPDATEUSER: any = graphql(`
  mutation AddUser($email: String, $name: String, $image: String) {
    insert_user(
      objects: {
        display_name: $name
        email: $email
        user_name: $name
        image: $image
      }
      on_conflict: {
        constraint: user_email_key
        update_columns: [display_name, image]
      }
    ) {
      returning {
        id
        email
        display_name
        user_name
      }
    }
  }
`);

const GETUSERBYID: any = graphql(`
  query UserById($userId: uuid!) {
    user: user_by_pk(id: $userId) {
      created_at
      email
      id
      display_name
      user_name
      updated_at
      image
    }
  }
`);

export const requireUser = async (request: Request) => {
  try {
    const sessionUser = await authenticator.isAuthenticated(request);

    if (!sessionUser || !sessionUser.id) {
      throw Error("Unauthorized");
    }

    const user: any = await hasuraAdminClient.request(GETUSERBYID, {
      userId: sessionUser.id,
    });
    if (user?.user && user.user?.id) {
      return { ...user.user, token: sessionUser?.token };
    }
    throw Error("Unauthorized");
  } catch (error) {
    await authenticator.logout(request, { redirectTo: "/" });
  }
};

export const createOrUpdateUser = async ({
  email,
  name,
  image,
}: {
  email: string;
  name: string;
  image: string;
}) => {
  const newUser: any = await hasuraAdminClient.request(CREATEORUPDATEUSER, {
    name,
    email,
    image,
  });
  const user = newUser.insert_user?.returning?.[0];
  if (!user?.id) {
    throw Error("Unauthorized");
  }
  const token = createHasuraToken(user.id);
  return { id: user.id, email: user.email, token };
};

const googleStrategy = new GoogleStrategy(
  {
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
  },
  async ({ profile }) => {
    const {
      displayName: name,
      _json: { email },
    } = profile;
    const image = profile.photos[0].value;
    return await createOrUpdateUser({
      email,
      name,
      image,
    });
  }
);

authenticator.use(googleStrategy, "google");
