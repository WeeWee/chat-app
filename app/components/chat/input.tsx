import { Form } from "@remix-run/react";
import { TUser } from "~/types";

export const ChatInput = (/* {
	inputCallback,
}: {
	inputCallback: React.Dispatch<React.SetStateAction<boolean>>;
} */) => {
	return (
		<Form method="post">
			<input hidden value="send-message" readOnly name="_action" />
			<input
				/* onChange={(e) => {
					e.preventDefault();
					inputCallback(true);
				}} */
				name="message_text"
				placeholder="enter your message"
			/>
			<button type="submit">Send</button>
		</Form>
	);
};
