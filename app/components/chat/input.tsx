import { Form } from "@remix-run/react";
import { TUser } from "~/types";

export const ChatInput = () => {
  return (
    <Form method="post">
      <input hidden value="send-message" readOnly name="_action" />
      <input name="message_text" placeholder="enter your message" />
      <button type="submit">Send</button>
    </Form>
  );
};
