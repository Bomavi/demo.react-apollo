import gql from 'graphql-tag';

export const findUserByIdQuery = gql`
	query FindUserById($id: Int!) {
		findUserById(id: $id) {
			id
			username
			theme
			createdAt
			updatedAt
		}
	}
`;
