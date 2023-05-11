import { GraphQLClient, gql } from "graphql-request";
import jwt from "jsonwebtoken";
import { graphql } from "~/_gql";
import { env } from "./env.server";
import { string } from "zod";
import { TChat, TMessage, TUser } from "~/types";

export const createHasuraToken = (userId: string | undefined): string => {
  const payload = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["public", "user"],
      "x-hasura-default-role": "user",
      "x-hasura-user-id": userId || "00000000-0000-0000-0000-000000000000",
    },
  };

  return jwt.sign(payload, env.HASURA_JWT_SECRET.key, {
    algorithm: env.HASURA_JWT_SECRET.type,
  });
};

export const hasuraAdminClient = new GraphQLClient(`${env.HASURA_URL}`, {
  method: "post",
  headers: {
    "x-hasura-admin-secret": env.HASURA_SECRET,
  },
});

export const hasuraClient = (token: string) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
  return new GraphQLClient(env.HASURA_URL, {
    method: "post",
    headers,
  });
};

export const CREATECHAT: any = graphql(`
  mutation CreateChatMutation($name: String) {
    chat: insert_chat_one(object: { name: $name }) {
      id
    }
  }
`);
export const CREATEMESSAGE: any = graphql(`
  mutation CreateMessage($authorId: uuid, $chatId: uuid, $text: String) {
    insert_message(
      objects: { author_id: $authorId, chat_id: $chatId, text: $text }
    ) {
      affected_rows
    }
  }
`);
export const ADDCHATMEMBER: any = graphql(`
  mutation AddChatMemberMutation($chatId: uuid, $userId: uuid) {
    insert_chat_member(objects: { chat_id: $chatId, user_id: $userId }) {
      affected_rows
    }
  }
`);
export const GETNEWMESSAGES: any = gql`
  subscription GetMessageStreamingSubscription($timestamp: timestamptz) {
    message_stream(
      batch_size: 10
      cursor: { initial_value: { timestamp: $timestamp } }
    ) {
      text
      timestamp
      author_id
      id
    }
  }
`;
export const GETMESSAGES: any = graphql(`
  query GetMessages($chatId: uuid) {
    message(where: { chat_id: { _eq: $chatId } }, limit: 10) {
      text
      timestamp
      id
      message_user {
        display_name
        image
        id
      }
    }
  }
`);
export const GETIDFROMEMAIL: any = graphql(`
  query GetIdFromEmail($email: String) {
    user(where: { email: { _eq: $email } }) {
      id
    }
  }
`);
export const GETCHATFROMID: any = graphql(`
  query GetChat($chatId: uuid) {
    chat(where: { id: { _eq: $chatId } }) {
      name
      chat_members {
        user {
          display_name
          image
          id
          last_seen
          last_typed
        }
      }
    }
  }
`);
export const CreateChat = async ({ name }: { name: string }) => {
  const { chat }: { chat: { id: string } } = await hasuraAdminClient.request(
    CREATECHAT,
    {
      name,
    }
  );
  return chat?.id;
};
export const GetChatFromId = async ({
  chatId,
  token,
}: {
  chatId: string;
  token: string;
}) => {
  const { chat }: { chat: TChat[] } = await hasuraClient(token).request(
    GETCHATFROMID,
    {
      chatId,
    }
  );
  return chat[0];
};
export const CreateMessage = async ({
  chatId,
  authorId,
  text,
  token,
}: {
  chatId: string;
  authorId: string;
  text: string;
  token: string;
}) => {
  const message = await hasuraClient(token).request(CREATEMESSAGE, {
    chatId,
    authorId,
    text,
  });
  console.log(message);
};
export const CreateChatMember = async ({
  chatId,
  userId,
}: {
  chatId: string;
  userId: string;
}) => {
  const chatMember = await hasuraAdminClient.request(ADDCHATMEMBER, {
    chatId,
    userId,
  });
  console.log(chatMember);
  return { chatMember };
};
export const GetMessages = async ({
  chatId,
  token,
}: {
  chatId: string;
  token: string;
}) => {
  const messages: { message: TMessage[] } = await hasuraClient(token).request(
    GETMESSAGES,
    {
      chatId,
    }
  );
  return messages.message;
};
export const GetIdFromEmail = async ({ email }: { email: string }) => {
  const { user }: { user: { id: string }[] } = await hasuraAdminClient.request(
    GETIDFROMEMAIL,
    {
      email,
    }
  );
  return user[0].id;
};

export const GetNewMessages = async ({
  timestamp,
  token,
}: {
  timestamp: Date;
  token: string;
}) => {
  const newmessages = await hasuraClient(token).request(GETNEWMESSAGES, {
    timestamp,
  });
};
