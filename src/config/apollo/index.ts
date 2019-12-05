import ApolloClient, { InMemoryCache } from 'apollo-boost';

import { GRAPHQL_URL } from 'utils/constants';

const cache = new InMemoryCache();

export const client = new ApolloClient({
	uri: GRAPHQL_URL,
	cache,
});
