import gql from 'graphql-tag';

export const findTaskByIdMutation = gql`
	query FindTaskById($id: ID!) {
		findTaskById(id: $id) {
			id
			description
			completed
			createdAt
			updatedAt
		}
	}
`;
