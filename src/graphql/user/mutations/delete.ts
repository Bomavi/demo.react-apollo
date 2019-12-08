import gql from 'graphql-tag';

export const deleteUserMutation = gql`
	mutation DeleteUser($id: Int!) {
		deleteUser(id: $id)
	}
`;
