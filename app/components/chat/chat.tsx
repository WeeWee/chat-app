import type { TChat, TChatMember, TMessage, TUser } from "~/types";
import { ChatInput, Members, Messages, OnlineUsers } from "..";

export const Chat = ({
	chat,
	messages,
	user,
	online_users,
	loading_users,
}: {
	chat: TChat;
	user: TUser;
	messages: TMessage[];
	online_users: { id: string; display_name: string }[];
	loading_users: boolean;
}) => {
	return (
		<div className="max-h-full border ">
			<h1 className="font-semibold capitalize">{chat.name}</h1>
			<OnlineUsers online_users={online_users} loading_users={loading_users} />
			<Members members={chat.chat_members} />
			<Messages user={user} messages={messages} />
			<ChatInput />
		</div>
	);
};
