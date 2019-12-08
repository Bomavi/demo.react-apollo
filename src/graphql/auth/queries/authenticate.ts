import gql from 'graphql-tag';

export const authenticateQuery = gql`
	query Authenticate {
		authenticate {
			id
			username
			theme
			createdAt
			updatedAt
		}
	}
`;
