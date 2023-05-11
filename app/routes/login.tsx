import { Form } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { authenticator } from "./services/auth.server";
export async function loader({ request }: LoaderArgs) {
  return authenticator.isAuthenticated(request, {
    successRedirect: "/messages",
  });
}
export default function Login() {
  return (
    <Form action="/auth/google" method="post">
      <button>Login with Google</button>
    </Form>
  );
}
