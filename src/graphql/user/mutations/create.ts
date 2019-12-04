import gql from 'graphql-tag';

export const createUserMutation = gql`
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
