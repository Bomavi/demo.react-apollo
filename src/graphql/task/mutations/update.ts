import gql from 'graphql-tag';

export const updateTaskMutation = gql`
	mutation UpdateTask($id: Int!, $description: String, $completed: Boolean) {
		updateTask(id: $id, description: $description, completed: $completed) {
			id
			description
			completed
			createdAt
			updatedAt
		}
	}
`;
