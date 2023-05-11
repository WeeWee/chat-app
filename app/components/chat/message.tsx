import type { TUser, TMessage } from "~/types";

export const Message = ({ data, user }: { data: TMessage; user: TUser }) => {
  return (
    <div
      className={`${
        user.id === data.message_user.id ? "justify-end" : "justify-start"
      } flex gap-2 my-4 `}
    >
      {user.id === data.message_user.id ? (
        <>
          <p>{data.text}</p>
          <img
            src={data.message_user.image}
            className="w-10 h-10 rounded-full"
            alt=""
          />
        </>
      ) : (
        <>
          <img
            src={data.message_user.image}
            className="w-10 h-10 rounded-full"
            alt=""
          />
          <p>{data.text}</p>
        </>
      )}
    </div>
  );
};
