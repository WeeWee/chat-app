import { Outlet, useLoaderData } from "@remix-run/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { requireUser } from "../services/auth.server";
import type { LoaderArgs } from "@remix-run/node";
import { GroupChats } from "~/components/groupChats";
export async function loader({ request }: LoaderArgs) {
  return await requireUser(request);
}
export default function ChatRoute() {
  const user = useLoaderData();
  return (
    <div className="flex min-w-full">
      <GroupChats chats={[]} />
      <Outlet />
    </div>
  );
}
