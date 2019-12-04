import gql from 'graphql-tag';

export const createTaskMutation = gql`
	mutation CreateTask($description: String!, $completed: Boolean) {
		createTask(description: $description, completed: $completed) {
			id
			description
			completed
			createdAt
			updatedAt
		}
	}
`;
