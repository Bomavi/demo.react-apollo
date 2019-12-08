import gql from 'graphql-tag';

export const deleteTaskMutation = gql`
	mutation DeleteTask($id: Int!) {
		deleteTask(id: $id)
	}
`;
