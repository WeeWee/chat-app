/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "chat" */
export type Chat = {
  /** An array relationship */
  chat_members: Array<Chat_Member>;
  /** An aggregate relationship */
  chat_members_aggregate: Chat_Member_Aggregate;
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "chat" */
export type ChatChat_MembersArgs = {
  distinct_on?: InputMaybe<Array<Chat_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Member_Order_By>>;
  where?: InputMaybe<Chat_Member_Bool_Exp>;
};


/** columns and relationships of "chat" */
export type ChatChat_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Member_Order_By>>;
  where?: InputMaybe<Chat_Member_Bool_Exp>;
};

/** aggregated selection of "chat" */
export type Chat_Aggregate = {
  aggregate?: Maybe<Chat_Aggregate_Fields>;
  nodes: Array<Chat>;
};

export type Chat_Aggregate_Bool_Exp = {
  count?: InputMaybe<Chat_Aggregate_Bool_Exp_Count>;
};

export type Chat_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Chat_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Chat_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "chat" */
export type Chat_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<Chat_Max_Fields>;
  min?: Maybe<Chat_Min_Fields>;
};


/** aggregate fields of "chat" */
export type Chat_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chat_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chat" */
export type Chat_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Chat_Max_Order_By>;
  min?: InputMaybe<Chat_Min_Order_By>;
};

/** input type for inserting array relation for remote table "chat" */
export type Chat_Arr_Rel_Insert_Input = {
  data: Array<Chat_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Chat_On_Conflict>;
};

/** Boolean expression to filter rows from the table "chat". All fields are combined with a logical 'AND'. */
export type Chat_Bool_Exp = {
  _and?: InputMaybe<Array<Chat_Bool_Exp>>;
  _not?: InputMaybe<Chat_Bool_Exp>;
  _or?: InputMaybe<Array<Chat_Bool_Exp>>;
  chat_members?: InputMaybe<Chat_Member_Bool_Exp>;
  chat_members_aggregate?: InputMaybe<Chat_Member_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "chat" */
export type Chat_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'chat_pkey';

/** input type for inserting data into table "chat" */
export type Chat_Insert_Input = {
  chat_members?: InputMaybe<Chat_Member_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Chat_Max_Fields = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "chat" */
export type Chat_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "chat_member" */
export type Chat_Member = {
  /** An object relationship */
  chat: Chat;
  chat_id: Scalars['uuid'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "chat_member" */
export type Chat_Member_Aggregate = {
  aggregate?: Maybe<Chat_Member_Aggregate_Fields>;
  nodes: Array<Chat_Member>;
};

export type Chat_Member_Aggregate_Bool_Exp = {
  count?: InputMaybe<Chat_Member_Aggregate_Bool_Exp_Count>;
};

export type Chat_Member_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Chat_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Chat_Member_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "chat_member" */
export type Chat_Member_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<Chat_Member_Max_Fields>;
  min?: Maybe<Chat_Member_Min_Fields>;
};


/** aggregate fields of "chat_member" */
export type Chat_Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chat_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chat_member" */
export type Chat_Member_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Chat_Member_Max_Order_By>;
  min?: InputMaybe<Chat_Member_Min_Order_By>;
};

/** input type for inserting array relation for remote table "chat_member" */
export type Chat_Member_Arr_Rel_Insert_Input = {
  data: Array<Chat_Member_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Chat_Member_On_Conflict>;
};

/** Boolean expression to filter rows from the table "chat_member". All fields are combined with a logical 'AND'. */
export type Chat_Member_Bool_Exp = {
  _and?: InputMaybe<Array<Chat_Member_Bool_Exp>>;
  _not?: InputMaybe<Chat_Member_Bool_Exp>;
  _or?: InputMaybe<Array<Chat_Member_Bool_Exp>>;
  chat?: InputMaybe<Chat_Bool_Exp>;
  chat_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "chat_member" */
export type Chat_Member_Constraint =
  /** unique or primary key constraint on columns "user_id", "chat_id" */
  | 'chat_member_pkey';

/** input type for inserting data into table "chat_member" */
export type Chat_Member_Insert_Input = {
  chat?: InputMaybe<Chat_Obj_Rel_Insert_Input>;
  chat_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Chat_Member_Max_Fields = {
  chat_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "chat_member" */
export type Chat_Member_Max_Order_By = {
  chat_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Chat_Member_Min_Fields = {
  chat_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "chat_member" */
export type Chat_Member_Min_Order_By = {
  chat_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "chat_member" */
export type Chat_Member_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chat_Member>;
};

/** input type for inserting object relation for remote table "chat_member" */
export type Chat_Member_Obj_Rel_Insert_Input = {
  data: Chat_Member_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Chat_Member_On_Conflict>;
};

/** on_conflict condition type for table "chat_member" */
export type Chat_Member_On_Conflict = {
  constraint: Chat_Member_Constraint;
  update_columns?: Array<Chat_Member_Update_Column>;
  where?: InputMaybe<Chat_Member_Bool_Exp>;
};

/** Ordering options when selecting data from "chat_member". */
export type Chat_Member_Order_By = {
  chat?: InputMaybe<Chat_Order_By>;
  chat_id?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: chat_member */
export type Chat_Member_Pk_Columns_Input = {
  chat_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** select columns of table "chat_member" */
export type Chat_Member_Select_Column =
  /** column name */
  | 'chat_id'
  /** column name */
  | 'user_id';

/** input type for updating data in table "chat_member" */
export type Chat_Member_Set_Input = {
  chat_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "chat_member" */
export type Chat_Member_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chat_Member_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chat_Member_Stream_Cursor_Value_Input = {
  chat_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "chat_member" */
export type Chat_Member_Update_Column =
  /** column name */
  | 'chat_id'
  /** column name */
  | 'user_id';

export type Chat_Member_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chat_Member_Set_Input>;
  /** filter the rows which have to be updated */
  where: Chat_Member_Bool_Exp;
};

/** aggregate min on columns */
export type Chat_Min_Fields = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "chat" */
export type Chat_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "chat" */
export type Chat_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chat>;
};

/** input type for inserting object relation for remote table "chat" */
export type Chat_Obj_Rel_Insert_Input = {
  data: Chat_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Chat_On_Conflict>;
};

/** on_conflict condition type for table "chat" */
export type Chat_On_Conflict = {
  constraint: Chat_Constraint;
  update_columns?: Array<Chat_Update_Column>;
  where?: InputMaybe<Chat_Bool_Exp>;
};

/** Ordering options when selecting data from "chat". */
export type Chat_Order_By = {
  chat_members_aggregate?: InputMaybe<Chat_Member_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: chat */
export type Chat_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "chat" */
export type Chat_Select_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'user_id';

/** input type for updating data in table "chat" */
export type Chat_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "chat" */
export type Chat_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chat_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chat_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "chat" */
export type Chat_Update_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'user_id';

export type Chat_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chat_Set_Input>;
  /** filter the rows which have to be updated */
  where: Chat_Bool_Exp;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** columns and relationships of "message" */
export type Message = {
  author_id: Scalars['uuid'];
  chat_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  message_user: User;
  /** An array relationship */
  recipients: Array<Chat_Member>;
  /** An aggregate relationship */
  recipients_aggregate: Chat_Member_Aggregate;
  text: Scalars['String'];
  timestamp: Scalars['timestamptz'];
};


/** columns and relationships of "message" */
export type MessageRecipientsArgs = {
  distinct_on?: InputMaybe<Array<Chat_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Member_Order_By>>;
  where?: InputMaybe<Chat_Member_Bool_Exp>;
};


/** columns and relationships of "message" */
export type MessageRecipients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Member_Order_By>>;
  where?: InputMaybe<Chat_Member_Bool_Exp>;
};

/** aggregated selection of "message" */
export type Message_Aggregate = {
  aggregate?: Maybe<Message_Aggregate_Fields>;
  nodes: Array<Message>;
};

export type Message_Aggregate_Bool_Exp = {
  count?: InputMaybe<Message_Aggregate_Bool_Exp_Count>;
};

export type Message_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Message_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "message" */
export type Message_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<Message_Max_Fields>;
  min?: Maybe<Message_Min_Fields>;
};


/** aggregate fields of "message" */
export type Message_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "message" */
export type Message_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Message_Max_Order_By>;
  min?: InputMaybe<Message_Min_Order_By>;
};

/** input type for inserting array relation for remote table "message" */
export type Message_Arr_Rel_Insert_Input = {
  data: Array<Message_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Message_On_Conflict>;
};

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  _and?: InputMaybe<Array<Message_Bool_Exp>>;
  _not?: InputMaybe<Message_Bool_Exp>;
  _or?: InputMaybe<Array<Message_Bool_Exp>>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  chat_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message_user?: InputMaybe<User_Bool_Exp>;
  recipients?: InputMaybe<Chat_Member_Bool_Exp>;
  recipients_aggregate?: InputMaybe<Chat_Member_Aggregate_Bool_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "message" */
export type Message_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'message_pkey';

/** input type for inserting data into table "message" */
export type Message_Insert_Input = {
  author_id?: InputMaybe<Scalars['uuid']>;
  chat_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  message_user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  recipients?: InputMaybe<Chat_Member_Arr_Rel_Insert_Input>;
  text?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Message_Max_Fields = {
  author_id?: Maybe<Scalars['uuid']>;
  chat_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "message" */
export type Message_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Message_Min_Fields = {
  author_id?: Maybe<Scalars['uuid']>;
  chat_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "message" */
export type Message_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "message" */
export type Message_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Message>;
};

/** on_conflict condition type for table "message" */
export type Message_On_Conflict = {
  constraint: Message_Constraint;
  update_columns?: Array<Message_Update_Column>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** Ordering options when selecting data from "message". */
export type Message_Order_By = {
  author_id?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message_user?: InputMaybe<User_Order_By>;
  recipients_aggregate?: InputMaybe<Chat_Member_Aggregate_Order_By>;
  text?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** primary key columns input for table: message */
export type Message_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "message" */
export type Message_Select_Column =
  /** column name */
  | 'author_id'
  /** column name */
  | 'chat_id'
  /** column name */
  | 'id'
  /** column name */
  | 'text'
  /** column name */
  | 'timestamp';

/** input type for updating data in table "message" */
export type Message_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']>;
  chat_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "message" */
export type Message_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Message_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Message_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']>;
  chat_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "message" */
export type Message_Update_Column =
  /** column name */
  | 'author_id'
  /** column name */
  | 'chat_id'
  /** column name */
  | 'id'
  /** column name */
  | 'text'
  /** column name */
  | 'timestamp';

export type Message_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Message_Set_Input>;
  /** filter the rows which have to be updated */
  where: Message_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "chat" */
  delete_chat?: Maybe<Chat_Mutation_Response>;
  /** delete single row from the table: "chat" */
  delete_chat_by_pk?: Maybe<Chat>;
  /** delete data from the table: "chat_member" */
  delete_chat_member?: Maybe<Chat_Member_Mutation_Response>;
  /** delete single row from the table: "chat_member" */
  delete_chat_member_by_pk?: Maybe<Chat_Member>;
  /** delete data from the table: "message" */
  delete_message?: Maybe<Message_Mutation_Response>;
  /** delete single row from the table: "message" */
  delete_message_by_pk?: Maybe<Message>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_online" */
  delete_user_online?: Maybe<User_Online_Mutation_Response>;
  /** delete data from the table: "user_typing" */
  delete_user_typing?: Maybe<User_Typing_Mutation_Response>;
  /** insert data into the table: "chat" */
  insert_chat?: Maybe<Chat_Mutation_Response>;
  /** insert data into the table: "chat_member" */
  insert_chat_member?: Maybe<Chat_Member_Mutation_Response>;
  /** insert a single row into the table: "chat_member" */
  insert_chat_member_one?: Maybe<Chat_Member>;
  /** insert a single row into the table: "chat" */
  insert_chat_one?: Maybe<Chat>;
  /** insert data into the table: "message" */
  insert_message?: Maybe<Message_Mutation_Response>;
  /** insert a single row into the table: "message" */
  insert_message_one?: Maybe<Message>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_online" */
  insert_user_online?: Maybe<User_Online_Mutation_Response>;
  /** insert a single row into the table: "user_online" */
  insert_user_online_one?: Maybe<User_Online>;
  /** insert data into the table: "user_typing" */
  insert_user_typing?: Maybe<User_Typing_Mutation_Response>;
  /** insert a single row into the table: "user_typing" */
  insert_user_typing_one?: Maybe<User_Typing>;
  /** update data of the table: "chat" */
  update_chat?: Maybe<Chat_Mutation_Response>;
  /** update single row of the table: "chat" */
  update_chat_by_pk?: Maybe<Chat>;
  /** update multiples rows of table: "chat" */
  update_chat_many?: Maybe<Array<Maybe<Chat_Mutation_Response>>>;
  /** update data of the table: "chat_member" */
  update_chat_member?: Maybe<Chat_Member_Mutation_Response>;
  /** update single row of the table: "chat_member" */
  update_chat_member_by_pk?: Maybe<Chat_Member>;
  /** update multiples rows of table: "chat_member" */
  update_chat_member_many?: Maybe<Array<Maybe<Chat_Member_Mutation_Response>>>;
  /** update data of the table: "message" */
  update_message?: Maybe<Message_Mutation_Response>;
  /** update single row of the table: "message" */
  update_message_by_pk?: Maybe<Message>;
  /** update multiples rows of table: "message" */
  update_message_many?: Maybe<Array<Maybe<Message_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** update data of the table: "user_online" */
  update_user_online?: Maybe<User_Online_Mutation_Response>;
  /** update multiples rows of table: "user_online" */
  update_user_online_many?: Maybe<Array<Maybe<User_Online_Mutation_Response>>>;
  /** update data of the table: "user_typing" */
  update_user_typing?: Maybe<User_Typing_Mutation_Response>;
  /** update multiples rows of table: "user_typing" */
  update_user_typing_many?: Maybe<Array<Maybe<User_Typing_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ChatArgs = {
  where: Chat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chat_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Chat_MemberArgs = {
  where: Chat_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chat_Member_By_PkArgs = {
  chat_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_MessageArgs = {
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Message_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_OnlineArgs = {
  where: User_Online_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_TypingArgs = {
  where: User_Typing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_ChatArgs = {
  objects: Array<Chat_Insert_Input>;
  on_conflict?: InputMaybe<Chat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_MemberArgs = {
  objects: Array<Chat_Member_Insert_Input>;
  on_conflict?: InputMaybe<Chat_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Member_OneArgs = {
  object: Chat_Member_Insert_Input;
  on_conflict?: InputMaybe<Chat_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_OneArgs = {
  object: Chat_Insert_Input;
  on_conflict?: InputMaybe<Chat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessageArgs = {
  objects: Array<Message_Insert_Input>;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_OneArgs = {
  object: Message_Insert_Input;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OnlineArgs = {
  objects: Array<User_Online_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_Online_OneArgs = {
  object: User_Online_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_User_TypingArgs = {
  objects: Array<User_Typing_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_Typing_OneArgs = {
  object: User_Typing_Insert_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ChatArgs = {
  _set?: InputMaybe<Chat_Set_Input>;
  where: Chat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_By_PkArgs = {
  _set?: InputMaybe<Chat_Set_Input>;
  pk_columns: Chat_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_ManyArgs = {
  updates: Array<Chat_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_MemberArgs = {
  _set?: InputMaybe<Chat_Member_Set_Input>;
  where: Chat_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Member_By_PkArgs = {
  _set?: InputMaybe<Chat_Member_Set_Input>;
  pk_columns: Chat_Member_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Member_ManyArgs = {
  updates: Array<Chat_Member_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MessageArgs = {
  _set?: InputMaybe<Message_Set_Input>;
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Message_By_PkArgs = {
  _set?: InputMaybe<Message_Set_Input>;
  pk_columns: Message_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Message_ManyArgs = {
  updates: Array<Message_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_OnlineArgs = {
  _set?: InputMaybe<User_Online_Set_Input>;
  where: User_Online_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Online_ManyArgs = {
  updates: Array<User_Online_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_TypingArgs = {
  _set?: InputMaybe<User_Typing_Set_Input>;
  where: User_Typing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Typing_ManyArgs = {
  updates: Array<User_Typing_Updates>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

export type Query_Root = {
  /** fetch data from the table: "chat" */
  chat: Array<Chat>;
  /** fetch aggregated fields from the table: "chat" */
  chat_aggregate: Chat_Aggregate;
  /** fetch data from the table: "chat" using primary key columns */
  chat_by_pk?: Maybe<Chat>;
  /** fetch data from the table: "chat_member" */
  chat_member: Array<Chat_Member>;
  /** fetch aggregated fields from the table: "chat_member" */
  chat_member_aggregate: Chat_Member_Aggregate;
  /** fetch data from the table: "chat_member" using primary key columns */
  chat_member_by_pk?: Maybe<Chat_Member>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** fetch data from the table: "message" using primary key columns */
  message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_online" */
  user_online: Array<User_Online>;
  /** fetch aggregated fields from the table: "user_online" */
  user_online_aggregate: User_Online_Aggregate;
  /** fetch data from the table: "user_typing" */
  user_typing: Array<User_Typing>;
  /** fetch aggregated fields from the table: "user_typing" */
  user_typing_aggregate: User_Typing_Aggregate;
};


export type Query_RootChatArgs = {
  distinct_on?: InputMaybe<Array<Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Order_By>>;
  where?: InputMaybe<Chat_Bool_Exp>;
};


export type Query_RootChat_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Order_By>>;
  where?: InputMaybe<Chat_Bool_Exp>;
};


export type Query_RootChat_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootChat_MemberArgs = {
  distinct_on?: InputMaybe<Array<Chat_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Member_Order_By>>;
  where?: InputMaybe<Chat_Member_Bool_Exp>;
};


export type Query_RootChat_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Member_Order_By>>;
  where?: InputMaybe<Chat_Member_Bool_Exp>;
};


export type Query_RootChat_Member_By_PkArgs = {
  chat_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Query_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_OnlineArgs = {
  distinct_on?: InputMaybe<Array<User_Online_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Online_Order_By>>;
  where?: InputMaybe<User_Online_Bool_Exp>;
};


export type Query_RootUser_Online_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Online_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Online_Order_By>>;
  where?: InputMaybe<User_Online_Bool_Exp>;
};


export type Query_RootUser_TypingArgs = {
  distinct_on?: InputMaybe<Array<User_Typing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Typing_Order_By>>;
  where?: InputMaybe<User_Typing_Bool_Exp>;
};


export type Query_RootUser_Typing_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Typing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Typing_Order_By>>;
  where?: InputMaybe<User_Typing_Bool_Exp>;
};

export type Subscription_Root = {
  /** fetch data from the table: "chat" */
  chat: Array<Chat>;
  /** fetch aggregated fields from the table: "chat" */
  chat_aggregate: Chat_Aggregate;
  /** fetch data from the table: "chat" using primary key columns */
  chat_by_pk?: Maybe<Chat>;
  /** fetch data from the table: "chat_member" */
  chat_member: Array<Chat_Member>;
  /** fetch aggregated fields from the table: "chat_member" */
  chat_member_aggregate: Chat_Member_Aggregate;
  /** fetch data from the table: "chat_member" using primary key columns */
  chat_member_by_pk?: Maybe<Chat_Member>;
  /** fetch data from the table in a streaming manner: "chat_member" */
  chat_member_stream: Array<Chat_Member>;
  /** fetch data from the table in a streaming manner: "chat" */
  chat_stream: Array<Chat>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** fetch data from the table: "message" using primary key columns */
  message_by_pk?: Maybe<Message>;
  /** fetch data from the table in a streaming manner: "message" */
  message_stream: Array<Message>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_online" */
  user_online: Array<User_Online>;
  /** fetch aggregated fields from the table: "user_online" */
  user_online_aggregate: User_Online_Aggregate;
  /** fetch data from the table in a streaming manner: "user_online" */
  user_online_stream: Array<User_Online>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
  /** fetch data from the table: "user_typing" */
  user_typing: Array<User_Typing>;
  /** fetch aggregated fields from the table: "user_typing" */
  user_typing_aggregate: User_Typing_Aggregate;
  /** fetch data from the table in a streaming manner: "user_typing" */
  user_typing_stream: Array<User_Typing>;
};


export type Subscription_RootChatArgs = {
  distinct_on?: InputMaybe<Array<Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Order_By>>;
  where?: InputMaybe<Chat_Bool_Exp>;
};


export type Subscription_RootChat_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Order_By>>;
  where?: InputMaybe<Chat_Bool_Exp>;
};


export type Subscription_RootChat_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootChat_MemberArgs = {
  distinct_on?: InputMaybe<Array<Chat_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Member_Order_By>>;
  where?: InputMaybe<Chat_Member_Bool_Exp>;
};


export type Subscription_RootChat_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Member_Order_By>>;
  where?: InputMaybe<Chat_Member_Bool_Exp>;
};


export type Subscription_RootChat_Member_By_PkArgs = {
  chat_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Subscription_RootChat_Member_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Chat_Member_Stream_Cursor_Input>>;
  where?: InputMaybe<Chat_Member_Bool_Exp>;
};


export type Subscription_RootChat_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Chat_Stream_Cursor_Input>>;
  where?: InputMaybe<Chat_Bool_Exp>;
};


export type Subscription_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMessage_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Message_Stream_Cursor_Input>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_OnlineArgs = {
  distinct_on?: InputMaybe<Array<User_Online_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Online_Order_By>>;
  where?: InputMaybe<User_Online_Bool_Exp>;
};


export type Subscription_RootUser_Online_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Online_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Online_Order_By>>;
  where?: InputMaybe<User_Online_Bool_Exp>;
};


export type Subscription_RootUser_Online_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Online_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Online_Bool_Exp>;
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_TypingArgs = {
  distinct_on?: InputMaybe<Array<User_Typing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Typing_Order_By>>;
  where?: InputMaybe<User_Typing_Bool_Exp>;
};


export type Subscription_RootUser_Typing_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Typing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Typing_Order_By>>;
  where?: InputMaybe<User_Typing_Bool_Exp>;
};


export type Subscription_RootUser_Typing_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Typing_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Typing_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  created_at: Scalars['timestamptz'];
  display_name: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  user_chat_members: Array<Chat_Member>;
  /** An aggregate relationship */
  user_chat_members_aggregate: Chat_Member_Aggregate;
  /** An array relationship */
  user_chats: Array<Chat>;
  /** An aggregate relationship */
  user_chats_aggregate: Chat_Aggregate;
  /** An array relationship */
  user_messages: Array<Message>;
  /** An aggregate relationship */
  user_messages_aggregate: Message_Aggregate;
  user_name: Scalars['String'];
};


/** columns and relationships of "user" */
export type UserUser_Chat_MembersArgs = {
  distinct_on?: InputMaybe<Array<Chat_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Member_Order_By>>;
  where?: InputMaybe<Chat_Member_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Chat_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Member_Order_By>>;
  where?: InputMaybe<Chat_Member_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_ChatsArgs = {
  distinct_on?: InputMaybe<Array<Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Order_By>>;
  where?: InputMaybe<Chat_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Chats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Order_By>>;
  where?: InputMaybe<Chat_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_MessagesArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Messages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_typed?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_chat_members?: InputMaybe<Chat_Member_Bool_Exp>;
  user_chat_members_aggregate?: InputMaybe<Chat_Member_Aggregate_Bool_Exp>;
  user_chats?: InputMaybe<Chat_Bool_Exp>;
  user_chats_aggregate?: InputMaybe<Chat_Aggregate_Bool_Exp>;
  user_messages?: InputMaybe<Message_Bool_Exp>;
  user_messages_aggregate?: InputMaybe<Message_Aggregate_Bool_Exp>;
  user_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export type User_Constraint =
  /** unique or primary key constraint on columns "email" */
  | 'user_email_key'
  /** unique or primary key constraint on columns "id" */
  | 'user_id_key'
  /** unique or primary key constraint on columns "id" */
  | 'user_pkey';

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  display_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  last_typed?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_chat_members?: InputMaybe<Chat_Member_Arr_Rel_Insert_Input>;
  user_chats?: InputMaybe<Chat_Arr_Rel_Insert_Input>;
  user_messages?: InputMaybe<Message_Arr_Rel_Insert_Input>;
  user_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** columns and relationships of "user_online" */
export type User_Online = {
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  online_chat_members?: Maybe<Chat_Member>;
  user_name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "user_online" */
export type User_Online_Aggregate = {
  aggregate?: Maybe<User_Online_Aggregate_Fields>;
  nodes: Array<User_Online>;
};

/** aggregate fields of "user_online" */
export type User_Online_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<User_Online_Max_Fields>;
  min?: Maybe<User_Online_Min_Fields>;
};


/** aggregate fields of "user_online" */
export type User_Online_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Online_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_online". All fields are combined with a logical 'AND'. */
export type User_Online_Bool_Exp = {
  _and?: InputMaybe<Array<User_Online_Bool_Exp>>;
  _not?: InputMaybe<User_Online_Bool_Exp>;
  _or?: InputMaybe<Array<User_Online_Bool_Exp>>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_typed?: InputMaybe<Timestamptz_Comparison_Exp>;
  online_chat_members?: InputMaybe<Chat_Member_Bool_Exp>;
  user_name?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "user_online" */
export type User_Online_Insert_Input = {
  display_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  last_typed?: InputMaybe<Scalars['timestamptz']>;
  online_chat_members?: InputMaybe<Chat_Member_Obj_Rel_Insert_Input>;
  user_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Online_Max_Fields = {
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  user_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Online_Min_Fields = {
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  user_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_online" */
export type User_Online_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Online>;
};

/** Ordering options when selecting data from "user_online". */
export type User_Online_Order_By = {
  display_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  last_typed?: InputMaybe<Order_By>;
  online_chat_members?: InputMaybe<Chat_Member_Order_By>;
  user_name?: InputMaybe<Order_By>;
};

/** select columns of table "user_online" */
export type User_Online_Select_Column =
  /** column name */
  | 'display_name'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'last_seen'
  /** column name */
  | 'last_typed'
  /** column name */
  | 'user_name';

/** input type for updating data in table "user_online" */
export type User_Online_Set_Input = {
  display_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  last_typed?: InputMaybe<Scalars['timestamptz']>;
  user_name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user_online" */
export type User_Online_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Online_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Online_Stream_Cursor_Value_Input = {
  display_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  last_typed?: InputMaybe<Scalars['timestamptz']>;
  user_name?: InputMaybe<Scalars['String']>;
};

export type User_Online_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Online_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Online_Bool_Exp;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  last_typed?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_chat_members_aggregate?: InputMaybe<Chat_Member_Aggregate_Order_By>;
  user_chats_aggregate?: InputMaybe<Chat_Aggregate_Order_By>;
  user_messages_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
  user_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export type User_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'display_name'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'last_seen'
  /** column name */
  | 'last_typed'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_name';

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  display_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  last_typed?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  display_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  last_typed?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_name?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "user_typing" */
export type User_Typing = {
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  user_name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "user_typing" */
export type User_Typing_Aggregate = {
  aggregate?: Maybe<User_Typing_Aggregate_Fields>;
  nodes: Array<User_Typing>;
};

/** aggregate fields of "user_typing" */
export type User_Typing_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<User_Typing_Max_Fields>;
  min?: Maybe<User_Typing_Min_Fields>;
};


/** aggregate fields of "user_typing" */
export type User_Typing_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Typing_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_typing". All fields are combined with a logical 'AND'. */
export type User_Typing_Bool_Exp = {
  _and?: InputMaybe<Array<User_Typing_Bool_Exp>>;
  _not?: InputMaybe<User_Typing_Bool_Exp>;
  _or?: InputMaybe<Array<User_Typing_Bool_Exp>>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_typed?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_name?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "user_typing" */
export type User_Typing_Insert_Input = {
  display_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  last_typed?: InputMaybe<Scalars['timestamptz']>;
  user_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Typing_Max_Fields = {
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  user_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Typing_Min_Fields = {
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  user_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_typing" */
export type User_Typing_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Typing>;
};

/** Ordering options when selecting data from "user_typing". */
export type User_Typing_Order_By = {
  display_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  last_typed?: InputMaybe<Order_By>;
  user_name?: InputMaybe<Order_By>;
};

/** select columns of table "user_typing" */
export type User_Typing_Select_Column =
  /** column name */
  | 'display_name'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'last_seen'
  /** column name */
  | 'last_typed'
  /** column name */
  | 'user_name';

/** input type for updating data in table "user_typing" */
export type User_Typing_Set_Input = {
  display_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  last_typed?: InputMaybe<Scalars['timestamptz']>;
  user_name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user_typing" */
export type User_Typing_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Typing_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Typing_Stream_Cursor_Value_Input = {
  display_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  last_typed?: InputMaybe<Scalars['timestamptz']>;
  user_name?: InputMaybe<Scalars['String']>;
};

export type User_Typing_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Typing_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Typing_Bool_Exp;
};

/** update columns of table "user" */
export type User_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'display_name'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'last_seen'
  /** column name */
  | 'last_typed'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_name';

export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type UpdateUserMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type UpdateUserMutation = { update_user_by_pk?: { id: string } | null };

export type GetMessagesTestQueryVariables = Exact<{
  chatId?: InputMaybe<Scalars['uuid']>;
  messageId?: InputMaybe<Scalars['uuid']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
}>;


export type GetMessagesTestQuery = { message: Array<{ text: string, timestamp: string, id: string, message_user: { display_name: string, image?: string | null, id: string } }> };

export type OnlineUsersSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnlineUsersSubscription = { user_online: Array<{ id?: string | null, display_name?: string | null }> };

export type MessageSubscriptionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MessageSubscriptionSubscription = { message: Array<{ id: string, timestamp: string, text: string, message_user: { id: string } }> };

export type AddUserMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
}>;


export type AddUserMutation = { insert_user?: { returning: Array<{ id: string, email: string, display_name: string, user_name: string }> } | null };

export type UserByIdQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type UserByIdQuery = { user?: { created_at: string, email: string, id: string, display_name: string, user_name: string, updated_at: string, image?: string | null } | null };

export type CreateChatMutationMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
}>;


export type CreateChatMutationMutation = { chat?: { id: string } | null };

export type CreateMessageMutationVariables = Exact<{
  authorId?: InputMaybe<Scalars['uuid']>;
  chatId?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
}>;


export type CreateMessageMutation = { insert_message?: { affected_rows: number } | null };

export type AddChatMemberMutationMutationVariables = Exact<{
  chatId?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
}>;


export type AddChatMemberMutationMutation = { insert_chat_member?: { affected_rows: number } | null };

export type GetMessageStreamingSubscriptionSubscriptionVariables = Exact<{
  timestamp?: InputMaybe<Scalars['timestamptz']>;
}>;


export type GetMessageStreamingSubscriptionSubscription = { message_stream: Array<{ text: string, timestamp: string, author_id: string, id: string }> };

export type GetMessagesQueryVariables = Exact<{
  chatId?: InputMaybe<Scalars['uuid']>;
}>;


export type GetMessagesQuery = { message: Array<{ text: string, timestamp: string, id: string, message_user: { display_name: string, image?: string | null, id: string } }> };

export type GetIdFromEmailQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;


export type GetIdFromEmailQuery = { user: Array<{ id: string }> };

export type GetChatsQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['uuid']>;
}>;


export type GetChatsQuery = { chat: Array<{ name?: string | null, id: string, chat_members: Array<{ user_id: string, user: { display_name: string, id: string } }> }> };

export type GetChatQueryVariables = Exact<{
  chatId?: InputMaybe<Scalars['uuid']>;
}>;


export type GetChatQuery = { chat: Array<{ name?: string | null, chat_members: Array<{ user: { display_name: string, image?: string | null, id: string, last_seen?: string | null, last_typed?: string | null } }> }> };


export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"last_seen"},"value":{"kind":"StringValue","value":"now()","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetMessagesTestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMessagesTest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timestamp"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"chat_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_neq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"timestamp"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timestamp"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"timestamp"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message_user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetMessagesTestQuery, GetMessagesTestQueryVariables>;
export const OnlineUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnlineUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_online"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"display_name"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}}]}}]}}]} as unknown as DocumentNode<OnlineUsersSubscription, OnlineUsersSubscriptionVariables>;
export const MessageSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"MessageSubscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"timestamp"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"message_user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<MessageSubscriptionSubscription, MessageSubscriptionSubscriptionVariables>;
export const AddUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"display_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"user_email_key"}},{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"display_name"},{"kind":"EnumValue","value":"image"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}}]}}]}}]}}]} as unknown as DocumentNode<AddUserMutation, AddUserMutationVariables>;
export const UserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<UserByIdQuery, UserByIdQueryVariables>;
export const CreateChatMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChatMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"chat"},"name":{"kind":"Name","value":"insert_chat_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateChatMutationMutation, CreateChatMutationMutationVariables>;
export const CreateMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_message"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"author_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"chat_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<CreateMessageMutation, CreateMessageMutationVariables>;
export const AddChatMemberMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddChatMemberMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_chat_member"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"chat_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<AddChatMemberMutationMutation, AddChatMemberMutationMutationVariables>;
export const GetMessageStreamingSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"GetMessageStreamingSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timestamp"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message_stream"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"batch_size"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"initial_value"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"timestamp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timestamp"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"author_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetMessageStreamingSubscriptionSubscription, GetMessageStreamingSubscriptionSubscriptionVariables>;
export const GetMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"chat_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message_user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetMessagesQuery, GetMessagesQueryVariables>;
export const GetIdFromEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetIdFromEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetIdFromEmailQuery, GetIdFromEmailQueryVariables>;
export const GetChatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"chat_members"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chat_members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetChatsQuery, GetChatsQueryVariables>;
export const GetChatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chat_members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"last_seen"}},{"kind":"Field","name":{"kind":"Name","value":"last_typed"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetChatQuery, GetChatQueryVariables>;