import gql from 'graphql-tag';

export const searchUsersMutation = gql`
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
