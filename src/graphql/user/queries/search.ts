import gql from 'graphql-tag';

export const searchUsersQuery = gql`
	query SearchUsers($q: String, $sortBy: SortDirection) {
		searchUsers(q: $q, sortBy: $sortBy) {
			id
			username
			theme
			createdAt
			updatedAt
		}
	}
`;
