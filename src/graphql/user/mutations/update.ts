import gql from 'graphql-tag';

export const updateUserMutation = gql`
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
