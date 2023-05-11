import { Outlet, useLoaderData } from "@remix-run/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { requireUser } from "../services/auth.server";
import type { LoaderArgs } from "@remix-run/node";
export async function loader({ request }: LoaderArgs) {
  return await requireUser(request);
}
export default function ChatRoute() {
  const user = useLoaderData();
  const client = new ApolloClient({
    uri: "https://chat-application.hasura.app/v1/graphql",

    cache: new InMemoryCache(),

    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
  return (
    <div>
      Chat
      <ApolloProvider client={client}>
        <Outlet />
      </ApolloProvider>
    </div>
  );
}
