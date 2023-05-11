import type { TMessage, TUser } from "~/types";
import { Message } from "./message";

export const Messages = ({
  messages,
  user,
}: {
  messages: TMessage[];
  user: TUser;
}) => {
  return (
    <div>
      {messages.map((message) => (
        <Message key={message.id} data={message} user={user} />
      ))}
    </div>
  );
};
