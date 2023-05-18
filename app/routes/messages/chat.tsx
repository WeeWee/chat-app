import { Outlet, useLoaderData } from "@remix-run/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { requireUser } from "../services/auth.server";
import type { LoaderArgs } from "@remix-run/node";
import { GroupChats } from "~/components";
import { GetUserChats } from "../services/hasura.server";
import { createClient } from "graphql-ws";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { WebSocket } from "ws";
export async function loader({ request }: LoaderArgs) {
	const user = await requireUser(request);
	const chats = await GetUserChats({ token: user.token, userId: user.id });
	return { chats, apolloToken: user.token };
}

const createApolloClient = (authToken: string) => {
	console.log(`auth token`, authToken);
	return new ApolloClient({
		link: new GraphQLWsLink(
			createClient({
				webSocketImpl: WebSocket,
				url: "wss://chat-application.hasura.app/v1/graphql",
				connectionParams: {
					headers: {
						Authorization: `Bearer ${authToken}`,
					},
				},
			})
		),
		cache: new InMemoryCache(),
	});
};
export default function ChatRoute() {
	const { chats, apolloToken } = useLoaderData();
	const apolloclient = createApolloClient(apolloToken);
	return (
		<div className="flex min-w-full">
			<GroupChats chats={chats} />

			<ApolloProvider client={apolloclient}>
				<Outlet />
			</ApolloProvider>
		</div>
	);
}
