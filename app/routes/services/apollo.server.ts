import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
export const apolloClient = (/* { token }: { token: string } */) => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		uri: "https://chat-application.hasura.app/v1/graphql",
		/* headers: {
			Authorization: `Bearer ${token}`,
		}, */
	});
};
