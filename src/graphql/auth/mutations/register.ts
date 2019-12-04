import gql from 'graphql-tag';

export const registerMutation = gql`
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
