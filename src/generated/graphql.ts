import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any,
};


export type Mutation = {
   __typename?: 'Mutation',
  login: User,
  logout: Scalars['String'],
  register: User,
  createTask: Task,
  deleteTask: Scalars['Int'],
  updateTask: Task,
  createUser: User,
  deleteUser: Scalars['Int'],
  updateUser: User,
};


export type MutationLoginArgs = {
  username?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  isGuest?: Maybe<Scalars['Boolean']>
};


export type MutationRegisterArgs = {
  username: Scalars['String'],
  password: Scalars['String']
};


export type MutationCreateTaskArgs = {
  description: Scalars['String'],
  completed?: Maybe<Scalars['Boolean']>
};


export type MutationDeleteTaskArgs = {
  id: Scalars['Int']
};


export type MutationUpdateTaskArgs = {
  id: Scalars['Int'],
  description?: Maybe<Scalars['String']>,
  completed?: Maybe<Scalars['Boolean']>
};


export type MutationCreateUserArgs = {
  username: Scalars['String'],
  password: Scalars['String'],
  theme: Scalars['String']
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']
};


export type MutationUpdateUserArgs = {
  id: Scalars['Int'],
  username?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  theme?: Maybe<Theme>
};

export type Query = {
   __typename?: 'Query',
  authenticate: User,
  findTaskById: Task,
  searchTasks: Array<Task>,
  currentUser?: Maybe<User>,
  findUserById: User,
  searchUsers: Array<User>,
};


export type QueryFindTaskByIdArgs = {
  id: Scalars['Int']
};


export type QuerySearchTasksArgs = {
  q?: Maybe<Scalars['String']>
};


export type QueryFindUserByIdArgs = {
  id: Scalars['Int']
};


export type QuerySearchUsersArgs = {
  q?: Maybe<Scalars['String']>
};

export type Task = {
   __typename?: 'Task',
  id: Scalars['Int'],
  description: Scalars['String'],
  completed: Scalars['Boolean'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

/** Only available theme options */
export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

export type User = {
   __typename?: 'User',
  id: Scalars['Int'],
  username: Scalars['String'],
  theme: Theme,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type LoginMutationVariables = {
  username?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  isGuest?: Maybe<Scalars['Boolean']>
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'theme' | 'createdAt' | 'updatedAt'>
  ) }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = {
  username: Scalars['String'],
  password: Scalars['String']
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'theme' | 'createdAt' | 'updatedAt'>
  ) }
);

export type AuthenticateQueryVariables = {};


export type AuthenticateQuery = (
  { __typename?: 'Query' }
  & { authenticate: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'theme' | 'createdAt' | 'updatedAt'>
  ) }
);

export type CreateTaskMutationVariables = {
  description: Scalars['String'],
  completed?: Maybe<Scalars['Boolean']>
};


export type CreateTaskMutation = (
  { __typename?: 'Mutation' }
  & { createTask: (
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'description' | 'completed' | 'createdAt' | 'updatedAt'>
  ) }
);

export type DeleteTaskMutationVariables = {
  id: Scalars['Int']
};


export type DeleteTaskMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteTask'>
);

export type UpdateTaskMutationVariables = {
  id: Scalars['Int'],
  description?: Maybe<Scalars['String']>,
  completed?: Maybe<Scalars['Boolean']>
};


export type UpdateTaskMutation = (
  { __typename?: 'Mutation' }
  & { updateTask: (
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'description' | 'completed' | 'createdAt' | 'updatedAt'>
  ) }
);

export type FindTaskByIdQueryVariables = {
  id: Scalars['Int']
};


export type FindTaskByIdQuery = (
  { __typename?: 'Query' }
  & { findTaskById: (
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'description' | 'completed' | 'createdAt' | 'updatedAt'>
  ) }
);

export type SearchTasksQueryVariables = {
  q?: Maybe<Scalars['String']>
};


export type SearchTasksQuery = (
  { __typename?: 'Query' }
  & { searchTasks: Array<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'description' | 'completed' | 'createdAt' | 'updatedAt'>
  )> }
);

export type CreateUserMutationVariables = {
  username: Scalars['String'],
  password: Scalars['String'],
  theme: Scalars['String']
};


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'theme' | 'createdAt' | 'updatedAt'>
  ) }
);

export type DeleteUserMutationVariables = {
  id: Scalars['Int']
};


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteUser'>
);

export type UpdateUserMutationVariables = {
  id: Scalars['Int'],
  username?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  theme?: Maybe<Theme>
};


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'theme' | 'createdAt' | 'updatedAt'>
  ) }
);

export type CurrentUserQueryVariables = {};


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'theme' | 'createdAt' | 'updatedAt'>
  )> }
);

export type FindUserByIdQueryVariables = {
  id: Scalars['Int']
};


export type FindUserByIdQuery = (
  { __typename?: 'Query' }
  & { findUserById: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'theme' | 'createdAt' | 'updatedAt'>
  ) }
);

export type SearchUsersQueryVariables = {
  q?: Maybe<Scalars['String']>
};


export type SearchUsersQuery = (
  { __typename?: 'Query' }
  & { searchUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'theme' | 'createdAt' | 'updatedAt'>
  )> }
);


export const LoginDocument = gql`
    mutation Login($username: String, $password: String, $isGuest: Boolean) {
  login(username: $username, password: $password, isGuest: $isGuest) {
    id
    username
    theme
    createdAt
    updatedAt
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!) {
  register(username: $username, password: $password) {
    id
    username
    theme
    createdAt
    updatedAt
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const AuthenticateDocument = gql`
    query Authenticate {
  authenticate {
    id
    username
    theme
    createdAt
    updatedAt
  }
}
    `;
export function useAuthenticateQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AuthenticateQuery, AuthenticateQueryVariables>) {
        return ApolloReactHooks.useQuery<AuthenticateQuery, AuthenticateQueryVariables>(AuthenticateDocument, baseOptions);
      }
export function useAuthenticateLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AuthenticateQuery, AuthenticateQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AuthenticateQuery, AuthenticateQueryVariables>(AuthenticateDocument, baseOptions);
        }
export type AuthenticateQueryHookResult = ReturnType<typeof useAuthenticateQuery>;
export type AuthenticateLazyQueryHookResult = ReturnType<typeof useAuthenticateLazyQuery>;
export type AuthenticateQueryResult = ApolloReactCommon.QueryResult<AuthenticateQuery, AuthenticateQueryVariables>;
export const CreateTaskDocument = gql`
    mutation CreateTask($description: String!, $completed: Boolean) {
  createTask(description: $description, completed: $completed) {
    id
    description
    completed
    createdAt
    updatedAt
  }
}
    `;
export type CreateTaskMutationFn = ApolloReactCommon.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;
export function useCreateTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, baseOptions);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = ApolloReactCommon.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation DeleteTask($id: Int!) {
  deleteTask(id: $id)
}
    `;
export type DeleteTaskMutationFn = ApolloReactCommon.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;
export function useDeleteTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, baseOptions);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = ApolloReactCommon.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const UpdateTaskDocument = gql`
    mutation UpdateTask($id: Int!, $description: String, $completed: Boolean) {
  updateTask(id: $id, description: $description, completed: $completed) {
    id
    description
    completed
    createdAt
    updatedAt
  }
}
    `;
export type UpdateTaskMutationFn = ApolloReactCommon.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;
export function useUpdateTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, baseOptions);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = ApolloReactCommon.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const FindTaskByIdDocument = gql`
    query FindTaskById($id: Int!) {
  findTaskById(id: $id) {
    id
    description
    completed
    createdAt
    updatedAt
  }
}
    `;
export function useFindTaskByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindTaskByIdQuery, FindTaskByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<FindTaskByIdQuery, FindTaskByIdQueryVariables>(FindTaskByIdDocument, baseOptions);
      }
export function useFindTaskByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindTaskByIdQuery, FindTaskByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindTaskByIdQuery, FindTaskByIdQueryVariables>(FindTaskByIdDocument, baseOptions);
        }
export type FindTaskByIdQueryHookResult = ReturnType<typeof useFindTaskByIdQuery>;
export type FindTaskByIdLazyQueryHookResult = ReturnType<typeof useFindTaskByIdLazyQuery>;
export type FindTaskByIdQueryResult = ApolloReactCommon.QueryResult<FindTaskByIdQuery, FindTaskByIdQueryVariables>;
export const SearchTasksDocument = gql`
    query SearchTasks($q: String) {
  searchTasks(q: $q) {
    id
    description
    completed
    createdAt
    updatedAt
  }
}
    `;
export function useSearchTasksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchTasksQuery, SearchTasksQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchTasksQuery, SearchTasksQueryVariables>(SearchTasksDocument, baseOptions);
      }
export function useSearchTasksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchTasksQuery, SearchTasksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchTasksQuery, SearchTasksQueryVariables>(SearchTasksDocument, baseOptions);
        }
export type SearchTasksQueryHookResult = ReturnType<typeof useSearchTasksQuery>;
export type SearchTasksLazyQueryHookResult = ReturnType<typeof useSearchTasksLazyQuery>;
export type SearchTasksQueryResult = ApolloReactCommon.QueryResult<SearchTasksQuery, SearchTasksQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($username: String!, $password: String!, $theme: String!) {
  createUser(username: $username, password: $password, theme: $theme) {
    id
    username
    theme
    createdAt
    updatedAt
  }
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: Int!) {
  deleteUser(id: $id)
}
    `;
export type DeleteUserMutationFn = ApolloReactCommon.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;
export function useDeleteUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, baseOptions);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = ApolloReactCommon.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: Int!, $username: String, $password: String, $theme: Theme) {
  updateUser(id: $id, username: $username, password: $password, theme: $theme) {
    id
    username
    theme
    createdAt
    updatedAt
  }
}
    `;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
export function useUpdateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    id
    username
    theme
    createdAt
    updatedAt
  }
}
    `;
export function useCurrentUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = ApolloReactCommon.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const FindUserByIdDocument = gql`
    query FindUserById($id: Int!) {
  findUserById(id: $id) {
    id
    username
    theme
    createdAt
    updatedAt
  }
}
    `;
export function useFindUserByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindUserByIdQuery, FindUserByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<FindUserByIdQuery, FindUserByIdQueryVariables>(FindUserByIdDocument, baseOptions);
      }
export function useFindUserByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindUserByIdQuery, FindUserByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindUserByIdQuery, FindUserByIdQueryVariables>(FindUserByIdDocument, baseOptions);
        }
export type FindUserByIdQueryHookResult = ReturnType<typeof useFindUserByIdQuery>;
export type FindUserByIdLazyQueryHookResult = ReturnType<typeof useFindUserByIdLazyQuery>;
export type FindUserByIdQueryResult = ApolloReactCommon.QueryResult<FindUserByIdQuery, FindUserByIdQueryVariables>;
export const SearchUsersDocument = gql`
    query SearchUsers($q: String) {
  searchUsers(q: $q) {
    id
    username
    theme
    createdAt
    updatedAt
  }
}
    `;
export function useSearchUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchUsersQuery, SearchUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchUsersQuery, SearchUsersQueryVariables>(SearchUsersDocument, baseOptions);
      }
export function useSearchUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchUsersQuery, SearchUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchUsersQuery, SearchUsersQueryVariables>(SearchUsersDocument, baseOptions);
        }
export type SearchUsersQueryHookResult = ReturnType<typeof useSearchUsersQuery>;
export type SearchUsersLazyQueryHookResult = ReturnType<typeof useSearchUsersLazyQuery>;
export type SearchUsersQueryResult = ApolloReactCommon.QueryResult<SearchUsersQuery, SearchUsersQueryVariables>;