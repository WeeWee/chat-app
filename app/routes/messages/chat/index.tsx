import { Link } from "@remix-run/react";

export default function Index() {
	return (
		<div className="flex flex-col">
			Add a chat!
			<Link
				to="/messages/chat/add"
				className=" bg-blue-400 rounded-lg w-14 px-2 text-white"
			>
				Here
			</Link>
		</div>
	);
}
