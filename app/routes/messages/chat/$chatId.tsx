import { Chat } from "~/components/chat/chat";
import type { LoaderArgs } from "@remix-run/node";
import {
  CreateChatMember,
  CreateMessage,
  GETNEWMESSAGES,
  GetChatFromId,
  GetIdFromEmail,
  GetMessages,
} from "~/routes/services/hasura.server";
import { requireUser } from "~/routes/services/auth.server";
import { Form, useLoaderData } from "@remix-run/react";
import { type ActionArgs } from "@remix-run/node";
import { gql, useSubscription } from "@apollo/client";
import { useEffect } from "react";
export async function loader({ params, request }: LoaderArgs) {
  const user = await requireUser(request);
  const { chatId } = params;
  const chat = await GetChatFromId({ chatId: chatId!, token: user?.token });
  const messages = await GetMessages({ chatId: chatId!, token: user?.token });

  console.log(messages);
  return { chat, user, messages };
}
export async function action({ request, params }: ActionArgs) {
  const formData = await request.formData();
  const user = await requireUser(request);
  const { email, _action, message_text } = Object.fromEntries(formData);
  const { chatId } = params;
  if (_action === "add-member") {
    const userId = await GetIdFromEmail({ email: email.toString() });
    return await CreateChatMember({ chatId: chatId!, userId });
  }
  if (_action === "send-message") {
    const message = CreateMessage({
      chatId: chatId!,
      authorId: user?.id,
      text: message_text.toString(),
      token: user?.token,
    });
    return null;
  }
}
export default function ChatID() {
  const { chat, user, messages } = useLoaderData();

  /* const { loading, error, data } = useSubscription(
    gql`
      subscription GetNewMessages {
        message(order_by: { timestamp: asc }) {
          author_id
          text
          timestamp
        }
      }
    `
  );
  useEffect(() => console.log(data), [data]); */
  return (
    <div className="max-w-xl min-w-[40%]">
      <Form method="post">
        <input hidden value="add-member" readOnly name="_action" />
        <input name="email" type="email" />
        <button type="submit">Add member</button>
      </Form>
      <Chat chat={chat} user={user} messages={messages} />
    </div>
  );
}
