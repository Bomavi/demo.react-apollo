import gql from 'graphql-tag';

export const findUserByIdMutation = gql`
	query FindUserById($id: ID!) {
		findUserById(id: $id) {
			id
			username
			theme
			createdAt
			updatedAt
		}
	}
`;
