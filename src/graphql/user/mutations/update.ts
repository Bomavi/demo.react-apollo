import gql from 'graphql-tag';

export const updateUserMutation = gql`
	mutation UpdateUser($id: ID!, $username: String, $password: String!, $theme: String) {
		updateUser(id: $id, username: $username, password: $password, theme: $theme) {
			id
			username
			theme
			createdAt
			updatedAt
		}
	}
`;
