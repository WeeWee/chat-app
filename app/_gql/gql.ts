/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\t\tmutation UpdateUser($userId: uuid!) {\n\t\t\tupdate_user_by_pk(\n\t\t\t\tpk_columns: { id: $userId }\n\t\t\t\t_set: { last_seen: \"now()\" }\n\t\t\t) {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t": types.UpdateUserDocument,
    "\n\t\t\tquery GetMessagesTest(\n\t\t\t\t$chatId: uuid\n\t\t\t\t$messageId: uuid\n\t\t\t\t$timestamp: timestamptz\n\t\t\t) {\n\t\t\t\tmessage(\n\t\t\t\t\twhere: {\n\t\t\t\t\t\t_and: {\n\t\t\t\t\t\t\tchat_id: { _eq: $chatId }\n\t\t\t\t\t\t\tid: { _neq: $messageId }\n\t\t\t\t\t\t\ttimestamp: { _gte: $timestamp }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\torder_by: { timestamp: asc }\n\t\t\t\t) {\n\t\t\t\t\ttext\n\t\t\t\t\ttimestamp\n\t\t\t\t\tid\n\t\t\t\t\tmessage_user {\n\t\t\t\t\t\tdisplay_name\n\t\t\t\t\t\timage\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t": types.GetMessagesTestDocument,
    "\n\t\tsubscription OnlineUsers {\n\t\t\tuser_online(order_by: { display_name: asc }) {\n\t\t\t\tid\n\t\t\t\tdisplay_name\n\t\t\t}\n\t\t}\n\t": types.OnlineUsersDocument,
    "\n\t\t\tsubscription MessageSubscription {\n\t\t\t\tmessage(order_by: { timestamp: desc }, limit: 1) {\n\t\t\t\t\tid\n\t\t\t\t\ttimestamp\n\t\t\t\t\ttext\n\t\t\t\t\tmessage_user {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t": types.MessageSubscriptionDocument,
    "\n\tmutation AddUser($email: String, $name: String, $image: String) {\n\t\tinsert_user(\n\t\t\tobjects: {\n\t\t\t\tdisplay_name: $name\n\t\t\t\temail: $email\n\t\t\t\tuser_name: $name\n\t\t\t\timage: $image\n\t\t\t}\n\t\t\ton_conflict: {\n\t\t\t\tconstraint: user_email_key\n\t\t\t\tupdate_columns: [display_name, image]\n\t\t\t}\n\t\t) {\n\t\t\treturning {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tdisplay_name\n\t\t\t\tuser_name\n\t\t\t}\n\t\t}\n\t}\n": types.AddUserDocument,
    "\n\tquery UserById($userId: uuid!) {\n\t\tuser: user_by_pk(id: $userId) {\n\t\t\tcreated_at\n\t\t\temail\n\t\t\tid\n\t\t\tdisplay_name\n\t\t\tuser_name\n\t\t\tupdated_at\n\t\t\timage\n\t\t}\n\t}\n": types.UserByIdDocument,
    "\n\tmutation CreateChatMutation($name: String) {\n\t\tchat: insert_chat_one(object: { name: $name }) {\n\t\t\tid\n\t\t}\n\t}\n": types.CreateChatMutationDocument,
    "\n\tmutation CreateMessage($authorId: uuid, $chatId: uuid, $text: String) {\n\t\tinsert_message(\n\t\t\tobjects: { author_id: $authorId, chat_id: $chatId, text: $text }\n\t\t) {\n\t\t\taffected_rows\n\t\t}\n\t}\n": types.CreateMessageDocument,
    "\n\tmutation AddChatMemberMutation($chatId: uuid, $userId: uuid) {\n\t\tinsert_chat_member(objects: { chat_id: $chatId, user_id: $userId }) {\n\t\t\taffected_rows\n\t\t}\n\t}\n": types.AddChatMemberMutationDocument,
    "\n\tsubscription GetMessageStreamingSubscription($timestamp: timestamptz) {\n\t\tmessage_stream(\n\t\t\tbatch_size: 10\n\t\t\tcursor: { initial_value: { timestamp: $timestamp } }\n\t\t) {\n\t\t\ttext\n\t\t\ttimestamp\n\t\t\tauthor_id\n\t\t\tid\n\t\t}\n\t}\n": types.GetMessageStreamingSubscriptionDocument,
    "\n\tquery GetMessages($chatId: uuid) {\n\t\tmessage(where: { chat_id: { _eq: $chatId } }, limit: 10) {\n\t\t\ttext\n\t\t\ttimestamp\n\t\t\tid\n\t\t\tmessage_user {\n\t\t\t\tdisplay_name\n\t\t\t\timage\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n": types.GetMessagesDocument,
    "\n\tquery GetMessagesTest(\n\t\t$chatId: uuid\n\t\t$messageId: uuid\n\t\t$timestamp: timestamptz\n\t) {\n\t\tmessage(\n\t\t\twhere: {\n\t\t\t\t_and: {\n\t\t\t\t\tchat_id: { _eq: $chatId }\n\t\t\t\t\tid: { _neq: $messageId }\n\t\t\t\t\ttimestamp: { _gte: $timestamp }\n\t\t\t\t}\n\t\t\t}\n\t\t\torder_by: { timestamp: asc }\n\t\t) {\n\t\t\ttext\n\t\t\ttimestamp\n\t\t\tid\n\t\t\tmessage_user {\n\t\t\t\tdisplay_name\n\t\t\t\timage\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n": types.GetMessagesTestDocument,
    "\n\tquery GetIdFromEmail($email: String) {\n\t\tuser(where: { email: { _eq: $email } }) {\n\t\t\tid\n\t\t}\n\t}\n": types.GetIdFromEmailDocument,
    "\n\tquery GetChats($userId: uuid) {\n\t\tchat(where: { chat_members: { user_id: { _eq: $userId } } }) {\n\t\t\tname\n\t\t\tid\n\t\t\tchat_members {\n\t\t\t\tuser_id\n\t\t\t\tuser {\n\t\t\t\t\tdisplay_name\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetChatsDocument,
    "\n\tquery GetChat($chatId: uuid) {\n\t\tchat(where: { id: { _eq: $chatId } }) {\n\t\t\tname\n\t\t\tchat_members {\n\t\t\t\tuser {\n\t\t\t\t\tdisplay_name\n\t\t\t\t\timage\n\t\t\t\t\tid\n\t\t\t\t\tlast_seen\n\t\t\t\t\tlast_typed\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetChatDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tmutation UpdateUser($userId: uuid!) {\n\t\t\tupdate_user_by_pk(\n\t\t\t\tpk_columns: { id: $userId }\n\t\t\t\t_set: { last_seen: \"now()\" }\n\t\t\t) {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t"): (typeof documents)["\n\t\tmutation UpdateUser($userId: uuid!) {\n\t\t\tupdate_user_by_pk(\n\t\t\t\tpk_columns: { id: $userId }\n\t\t\t\t_set: { last_seen: \"now()\" }\n\t\t\t) {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\t\tquery GetMessagesTest(\n\t\t\t\t$chatId: uuid\n\t\t\t\t$messageId: uuid\n\t\t\t\t$timestamp: timestamptz\n\t\t\t) {\n\t\t\t\tmessage(\n\t\t\t\t\twhere: {\n\t\t\t\t\t\t_and: {\n\t\t\t\t\t\t\tchat_id: { _eq: $chatId }\n\t\t\t\t\t\t\tid: { _neq: $messageId }\n\t\t\t\t\t\t\ttimestamp: { _gte: $timestamp }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\torder_by: { timestamp: asc }\n\t\t\t\t) {\n\t\t\t\t\ttext\n\t\t\t\t\ttimestamp\n\t\t\t\t\tid\n\t\t\t\t\tmessage_user {\n\t\t\t\t\t\tdisplay_name\n\t\t\t\t\t\timage\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t"): (typeof documents)["\n\t\t\tquery GetMessagesTest(\n\t\t\t\t$chatId: uuid\n\t\t\t\t$messageId: uuid\n\t\t\t\t$timestamp: timestamptz\n\t\t\t) {\n\t\t\t\tmessage(\n\t\t\t\t\twhere: {\n\t\t\t\t\t\t_and: {\n\t\t\t\t\t\t\tchat_id: { _eq: $chatId }\n\t\t\t\t\t\t\tid: { _neq: $messageId }\n\t\t\t\t\t\t\ttimestamp: { _gte: $timestamp }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\torder_by: { timestamp: asc }\n\t\t\t\t) {\n\t\t\t\t\ttext\n\t\t\t\t\ttimestamp\n\t\t\t\t\tid\n\t\t\t\t\tmessage_user {\n\t\t\t\t\t\tdisplay_name\n\t\t\t\t\t\timage\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tsubscription OnlineUsers {\n\t\t\tuser_online(order_by: { display_name: asc }) {\n\t\t\t\tid\n\t\t\t\tdisplay_name\n\t\t\t}\n\t\t}\n\t"): (typeof documents)["\n\t\tsubscription OnlineUsers {\n\t\t\tuser_online(order_by: { display_name: asc }) {\n\t\t\t\tid\n\t\t\t\tdisplay_name\n\t\t\t}\n\t\t}\n\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\t\tsubscription MessageSubscription {\n\t\t\t\tmessage(order_by: { timestamp: desc }, limit: 1) {\n\t\t\t\t\tid\n\t\t\t\t\ttimestamp\n\t\t\t\t\ttext\n\t\t\t\t\tmessage_user {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t"): (typeof documents)["\n\t\t\tsubscription MessageSubscription {\n\t\t\t\tmessage(order_by: { timestamp: desc }, limit: 1) {\n\t\t\t\t\tid\n\t\t\t\t\ttimestamp\n\t\t\t\t\ttext\n\t\t\t\t\tmessage_user {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation AddUser($email: String, $name: String, $image: String) {\n\t\tinsert_user(\n\t\t\tobjects: {\n\t\t\t\tdisplay_name: $name\n\t\t\t\temail: $email\n\t\t\t\tuser_name: $name\n\t\t\t\timage: $image\n\t\t\t}\n\t\t\ton_conflict: {\n\t\t\t\tconstraint: user_email_key\n\t\t\t\tupdate_columns: [display_name, image]\n\t\t\t}\n\t\t) {\n\t\t\treturning {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tdisplay_name\n\t\t\t\tuser_name\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation AddUser($email: String, $name: String, $image: String) {\n\t\tinsert_user(\n\t\t\tobjects: {\n\t\t\t\tdisplay_name: $name\n\t\t\t\temail: $email\n\t\t\t\tuser_name: $name\n\t\t\t\timage: $image\n\t\t\t}\n\t\t\ton_conflict: {\n\t\t\t\tconstraint: user_email_key\n\t\t\t\tupdate_columns: [display_name, image]\n\t\t\t}\n\t\t) {\n\t\t\treturning {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tdisplay_name\n\t\t\t\tuser_name\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery UserById($userId: uuid!) {\n\t\tuser: user_by_pk(id: $userId) {\n\t\t\tcreated_at\n\t\t\temail\n\t\t\tid\n\t\t\tdisplay_name\n\t\t\tuser_name\n\t\t\tupdated_at\n\t\t\timage\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery UserById($userId: uuid!) {\n\t\tuser: user_by_pk(id: $userId) {\n\t\t\tcreated_at\n\t\t\temail\n\t\t\tid\n\t\t\tdisplay_name\n\t\t\tuser_name\n\t\t\tupdated_at\n\t\t\timage\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateChatMutation($name: String) {\n\t\tchat: insert_chat_one(object: { name: $name }) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateChatMutation($name: String) {\n\t\tchat: insert_chat_one(object: { name: $name }) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateMessage($authorId: uuid, $chatId: uuid, $text: String) {\n\t\tinsert_message(\n\t\t\tobjects: { author_id: $authorId, chat_id: $chatId, text: $text }\n\t\t) {\n\t\t\taffected_rows\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateMessage($authorId: uuid, $chatId: uuid, $text: String) {\n\t\tinsert_message(\n\t\t\tobjects: { author_id: $authorId, chat_id: $chatId, text: $text }\n\t\t) {\n\t\t\taffected_rows\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation AddChatMemberMutation($chatId: uuid, $userId: uuid) {\n\t\tinsert_chat_member(objects: { chat_id: $chatId, user_id: $userId }) {\n\t\t\taffected_rows\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation AddChatMemberMutation($chatId: uuid, $userId: uuid) {\n\t\tinsert_chat_member(objects: { chat_id: $chatId, user_id: $userId }) {\n\t\t\taffected_rows\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tsubscription GetMessageStreamingSubscription($timestamp: timestamptz) {\n\t\tmessage_stream(\n\t\t\tbatch_size: 10\n\t\t\tcursor: { initial_value: { timestamp: $timestamp } }\n\t\t) {\n\t\t\ttext\n\t\t\ttimestamp\n\t\t\tauthor_id\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tsubscription GetMessageStreamingSubscription($timestamp: timestamptz) {\n\t\tmessage_stream(\n\t\t\tbatch_size: 10\n\t\t\tcursor: { initial_value: { timestamp: $timestamp } }\n\t\t) {\n\t\t\ttext\n\t\t\ttimestamp\n\t\t\tauthor_id\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetMessages($chatId: uuid) {\n\t\tmessage(where: { chat_id: { _eq: $chatId } }, limit: 10) {\n\t\t\ttext\n\t\t\ttimestamp\n\t\t\tid\n\t\t\tmessage_user {\n\t\t\t\tdisplay_name\n\t\t\t\timage\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetMessages($chatId: uuid) {\n\t\tmessage(where: { chat_id: { _eq: $chatId } }, limit: 10) {\n\t\t\ttext\n\t\t\ttimestamp\n\t\t\tid\n\t\t\tmessage_user {\n\t\t\t\tdisplay_name\n\t\t\t\timage\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetMessagesTest(\n\t\t$chatId: uuid\n\t\t$messageId: uuid\n\t\t$timestamp: timestamptz\n\t) {\n\t\tmessage(\n\t\t\twhere: {\n\t\t\t\t_and: {\n\t\t\t\t\tchat_id: { _eq: $chatId }\n\t\t\t\t\tid: { _neq: $messageId }\n\t\t\t\t\ttimestamp: { _gte: $timestamp }\n\t\t\t\t}\n\t\t\t}\n\t\t\torder_by: { timestamp: asc }\n\t\t) {\n\t\t\ttext\n\t\t\ttimestamp\n\t\t\tid\n\t\t\tmessage_user {\n\t\t\t\tdisplay_name\n\t\t\t\timage\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetMessagesTest(\n\t\t$chatId: uuid\n\t\t$messageId: uuid\n\t\t$timestamp: timestamptz\n\t) {\n\t\tmessage(\n\t\t\twhere: {\n\t\t\t\t_and: {\n\t\t\t\t\tchat_id: { _eq: $chatId }\n\t\t\t\t\tid: { _neq: $messageId }\n\t\t\t\t\ttimestamp: { _gte: $timestamp }\n\t\t\t\t}\n\t\t\t}\n\t\t\torder_by: { timestamp: asc }\n\t\t) {\n\t\t\ttext\n\t\t\ttimestamp\n\t\t\tid\n\t\t\tmessage_user {\n\t\t\t\tdisplay_name\n\t\t\t\timage\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetIdFromEmail($email: String) {\n\t\tuser(where: { email: { _eq: $email } }) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetIdFromEmail($email: String) {\n\t\tuser(where: { email: { _eq: $email } }) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetChats($userId: uuid) {\n\t\tchat(where: { chat_members: { user_id: { _eq: $userId } } }) {\n\t\t\tname\n\t\t\tid\n\t\t\tchat_members {\n\t\t\t\tuser_id\n\t\t\t\tuser {\n\t\t\t\t\tdisplay_name\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetChats($userId: uuid) {\n\t\tchat(where: { chat_members: { user_id: { _eq: $userId } } }) {\n\t\t\tname\n\t\t\tid\n\t\t\tchat_members {\n\t\t\t\tuser_id\n\t\t\t\tuser {\n\t\t\t\t\tdisplay_name\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetChat($chatId: uuid) {\n\t\tchat(where: { id: { _eq: $chatId } }) {\n\t\t\tname\n\t\t\tchat_members {\n\t\t\t\tuser {\n\t\t\t\t\tdisplay_name\n\t\t\t\t\timage\n\t\t\t\t\tid\n\t\t\t\t\tlast_seen\n\t\t\t\t\tlast_typed\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetChat($chatId: uuid) {\n\t\tchat(where: { id: { _eq: $chatId } }) {\n\t\t\tname\n\t\t\tchat_members {\n\t\t\t\tuser {\n\t\t\t\t\tdisplay_name\n\t\t\t\t\timage\n\t\t\t\t\tid\n\t\t\t\t\tlast_seen\n\t\t\t\t\tlast_typed\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;