export type TMessage = {
	text: string;
	id: string;
	timestamp: string;
	message_user: TUser;
};
export type TUser = {
	display_name: string;
	image: string;
	id: string;
	last_seen: Date;
	last_typed: Date;
};
export type TChatMember = {
	user: TUser;
};
export type TChat = {
	id: string;
	name: string;
	chat_members: TChatMember[];
};
