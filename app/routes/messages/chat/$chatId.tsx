import type { LoaderArgs } from "@remix-run/node";
import {
	CreateChatMember,
	CreateMessage,
	GetChatFromId,
	GetIdFromEmail,
} from "~/routes/services/hasura.server";
import { requireUser } from "~/routes/services/auth.server";
import { Form, useLoaderData } from "@remix-run/react";
import { type ActionArgs } from "@remix-run/node";
import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import { useEffect, useState } from "react";
import { Chat, ChatInput, Members, Messages, OnlineUsers } from "~/components";
import { TMessage } from "~/types";
export async function loader({ params, request }: LoaderArgs) {
	const user = await requireUser(request);
	const { chatId } = params;
	const chat = await GetChatFromId({ chatId: chatId!, token: user?.token });
	return { chat, user, chatId };
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
		await CreateMessage({
			chatId: chatId!,
			authorId: user?.id,
			text: message_text.toString(),
			token: user?.token,
		});
		return null;
	}
}
export default function ChatID() {
	const { chat, user, chatId } = useLoaderData();
	const [messages, setMessages] = useState<TMessage[]>([]);
/* 	const [newMessages, setNewMessages] = useState<TMessage[]>([]);
	const [seenMessages, setSeenMessages] = useState(false); */
	const [updateUser] = useMutation(gql`
		mutation UpdateUser($userId: uuid!) {
			update_user_by_pk(
				pk_columns: { id: $userId }
				_set: { last_seen: "now()" }
			) {
				id
			}
		}
	`);

	const getQueryVars = () => {
	/* 	if (newMessages.length !== 0)
			return {
				chatId,
				messageId: newMessages[newMessages.length - 1].id,
				timestamp: newMessages[newMessages.length - 1].timestamp,
			}; */
		if (messages.length !== 0)
			return {
				chatId,
				messageId: messages[messages.length - 1].id,
				timestamp: messages[messages.length - 1].timestamp,
			};
		else
			return {
				chatId,
				messageId: chatId,
				timestamp: new Date("2023-01-01T11:02:56.893Z").toISOString(),
			};
	};
	const addOldMessages = (newMessages: TMessage[]) => {
		const oldMessages = [...messages, ...newMessages];
		setMessages(oldMessages);
		/* setNewMessages([]); */
	};
/* 	const addNewMessages = (incomingMessages: TMessage[]) => {
		const allNewMessages = [...newMessages];
		incomingMessages.forEach((m) => {
			if (m.message_user.id !== user.id) {
				allNewMessages.push(m);
			}
		});
		setNewMessages(newMessages);
	}; */
	const { loading, refetch } = useQuery(
		gql`
			query GetMessagesTest(
				$chatId: uuid
				$messageId: uuid
				$timestamp: timestamptz
			) {
				message(
					where: {
						_and: {
							chat_id: { _eq: $chatId }
							id: { _neq: $messageId }
							timestamp: { _gte: $timestamp }
						}
					}
					order_by: { timestamp: asc }
				) {
					text
					timestamp
					id
					message_user {
						display_name
						image
						id
					}
				}
			}
		`,
		{
			variables: getQueryVars(),
			onCompleted: (data) => {
				const recievedMessages = data.message;

				if (recievedMessages.length > 0 && messages.length === 0) {
					addOldMessages(recievedMessages);
					console.log(messages);
				}
			},
		}
	);
	const online_users = useSubscription(gql`
		subscription OnlineUsers {
			user_online(order_by: { display_name: asc }) {
				id
				display_name
			}
		}
	`);
	useSubscription(
		gql`
			subscription MessageSubscription {
				message(order_by: { timestamp: desc }, limit: 1) {
					id
					timestamp
					text
					message_user {
						id
					}
				}
			}
		`,
		{
			onData: async () => {
				if (loading) return;
				const response = await refetch(getQueryVars());
				if (!response.data) return;
				console.log(response.data.message);
				addOldMessages(response.data.message);

			},
		}
	);
	useEffect(() => {
		const interval = setInterval(() => {
			updateUser({ variables: { userId: user.id } });
		}, 4000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div className="max-w-xl min-w-[40%]">
			<Form method="post">
				<input hidden value="add-member" readOnly name="_action" />
				<input name="email" type="email" />
				<button type="submit">Add member</button>
			</Form>
			<div className="max-h-full border ">
				<h1 className="font-semibold capitalize">{chat.name}</h1>
				<OnlineUsers
					online_users={online_users.data?.user}
					loading_users={online_users.loading}
				/>
				<Members members={chat.chat_members} />
				<Messages user={user} messages={messages} loading_messages={loading} />
				
				<ChatInput />
			</div>
		</div>
	);
}
