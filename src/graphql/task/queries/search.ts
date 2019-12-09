import gql from 'graphql-tag';

export const searchTasksQuery = gql`
	query SearchTasks($q: String, $sortBy: SortDirection) {
		searchTasks(q: $q, sortBy: $sortBy) {
			id
			description
			completed
			createdAt
			updatedAt
		}
	}
`;
