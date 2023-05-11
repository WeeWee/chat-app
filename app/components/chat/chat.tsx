import type { TChatMember, TMessage, TUser } from "~/types";
import { ChatInput } from "./input";
import { Messages } from "./messages";
import { Members } from "./members";

export const Chat = ({
  members,
  messages,
  user,
}: {
  members: TChatMember[];
  user: TUser;
  messages: TMessage[];
}) => {
  return (
    <div className=" max-w-xl relative max-h-full">
      <Members members={members} />
      <Messages user={user} messages={messages} />
      <ChatInput />
    </div>
  );
};
