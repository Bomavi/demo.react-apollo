import gql from 'graphql-tag';

export const loginMutation = gql`
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
