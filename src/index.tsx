/* npm imports: common */
import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';

/* root imports: view components */
import { App } from 'views/layouts/App';

/* root imports: common */
import { client } from 'config/apollo';
import { AppContextProvider } from 'context/app';
import { store } from 'store';

/* start react app */
render(
	<ApolloProvider client={client}>
		<Provider store={store}>
			<AppContextProvider>
				<App />
			</AppContextProvider>
		</Provider>
	</ApolloProvider>,
	document.getElementById('root')
);
