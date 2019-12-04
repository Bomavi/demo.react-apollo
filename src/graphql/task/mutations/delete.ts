import gql from 'graphql-tag';

export const deleteTaskMutation = gql`
	mutation DeleteTask($id: ID!) {
		deleteTask(id: $id)
	}
`;
