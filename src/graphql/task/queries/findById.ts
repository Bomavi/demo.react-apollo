import gql from 'graphql-tag';

export const findTaskByIdQuery = gql`
	query FindTaskById($id: Int!) {
		findTaskById(id: $id) {
			id
			description
			completed
			createdAt
			updatedAt
		}
	}
`;
