import { Link } from "@remix-run/react";
import type { TChat } from "~/types";

export const GroupChats = ({ chats }: { chats: TChat[] }) => {
	return (
		<div className="max-w-sm w-96">
			<p>Avaiable chats</p>
			{chats.map((chat) => (
				<div key={chat.name}>
					<Link to={`/messages/chat/${chat.id}`} className="font-semibold">
						{chat.name}
					</Link>

					{chat.chat_members.map((member) => (
						<p key={member.user.id} className="text-sm text-gray-600">
							{member.user.display_name}
						</p>
					))}
				</div>
			))}
		</div>
	);
};
