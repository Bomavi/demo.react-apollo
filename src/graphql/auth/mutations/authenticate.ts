import gql from 'graphql-tag';

export const authenticateMutation = gql`
	mutation Authenticate {
		authenticate {
			id
			username
			theme
			createdAt
			updatedAt
		}
	}
`;
