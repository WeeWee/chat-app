import { Form, Link } from "@remix-run/react";

export const Navbar = ({ loggedIn }: { loggedIn: boolean }) => {
	return (
		<nav className="flex justify-between mx-20">
			<h4 className="font-semibold">Messaging - App 💻</h4>
			{loggedIn ? (
				<Form method="post" action="/logout">
					<button>Logout</button>
				</Form>
			) : (
				<Link to="/login">Login</Link>
			)}
		</nav>
	);
};
