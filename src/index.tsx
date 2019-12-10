/* npm imports: common */
import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';

/* root imports: view components */
import { App } from 'views/layouts/App';

/* root imports: common */
import { client } from 'config/apollo';
import { StoreProvider } from 'context';

/* start react app */
render(
	<ApolloProvider client={client}>
		<StoreProvider>
			<App />
		</StoreProvider>
	</ApolloProvider>,
	document.getElementById('root')
);
