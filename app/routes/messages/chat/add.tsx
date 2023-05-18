import { Form } from "@remix-run/react";
import { type ActionArgs, redirect } from "@remix-run/node";
import { CreateChat, CreateChatMember } from "~/routes/services/hasura.server";
import { requireUser } from "~/routes/services/auth.server";
export async function action({ request }: ActionArgs) {
	const user = await requireUser(request);
	const formData = await request.formData();
	const { name } = Object.fromEntries(formData);
	const chatId = await CreateChat({ name: name.toString() });
	await CreateChatMember({ chatId, userId: user?.id });
	return redirect(`/messages/chat/${chatId}`);
}
export default function Add() {
	return (
		<div>
			<Form method="post" className="flex flex-col">
				<label>Enter your awesome chat name</label>
				<input name="name" placeholder="Here!" />
				<button type="submit">Create!</button>
			</Form>
		</div>
	);
}
