import gql from 'graphql-tag';

export const searchTasksMutation = gql`
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
