import type { TMessage, TUser } from "~/types";
import { Message } from "./message";

export const Messages = ({
	messages,
	user,
	loading_messages,
}: {
	messages: TMessage[];
	user: TUser;
	loading_messages: boolean;
}) => {
	return (
		<div className=" max-h-[600px] overflow-y-scroll">
			{loading_messages ? (
				<div>Loading Messages....</div>
			) : (
				messages.map((message) => (
					<Message key={message.id} data={message} user={user} />
				))
			)}
		</div>
	);
};
