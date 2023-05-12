import type { TChat, TChatMember, TMessage, TUser } from "~/types";
import { ChatInput } from "./input";
import { Messages } from "./messages";
import { Members } from "./members";

export const Chat = ({
  chat,
  messages,
  user,
}: {
  chat: TChat;
  user: TUser;
  messages: TMessage[];
}) => {
  return (
    <div className="max-h-full border ">
      <h1 className="font-semibold capitalize">{chat.name}</h1>
      <Members members={chat.chat_members} />
      <Messages user={user} messages={messages} />
      <ChatInput />
    </div>
  );
};
