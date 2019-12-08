import gql from 'graphql-tag';

export const searchUsersQuery = gql`
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
