import type { TChat } from "~/types";

export const GroupChats = ({ chats }: { chats: TChat[] }) => {
  return (
    <div className="max-w-sm w-96">
      <p>Avaiable chats</p>
      {chats.map((chat) => (
        <div></div>
      ))}
    </div>
  );
};
