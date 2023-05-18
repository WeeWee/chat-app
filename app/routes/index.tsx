import { Form, useLoaderData } from "@remix-run/react";
import { Navbar } from "~/components";

import type { LoaderArgs } from "@remix-run/node";
import { authenticator } from "./services/auth.server";
export async function loader({ request }: LoaderArgs) {
	const user = await authenticator.isAuthenticated(request);
	console.log(user);
	return user ? true : false;
}
export default function Index() {
	const loggedIn = useLoaderData();
	return (
		<div>
			<Navbar loggedIn={loggedIn} />
		</div>
	);
}
