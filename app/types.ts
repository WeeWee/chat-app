export type TMessage = {
  text: string;
  id: string;
  timestamp: Date;
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
  name: string;
  user: TUser;
};
export type TChat = {
  name: string;
  chat_members: TChatMember[];
};
