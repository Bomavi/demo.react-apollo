/* npm imports: common */
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Router, Switch, Route, Redirect } from 'react-router';

/* root imports: graphql */
import { useCurrentUserQuery } from 'generated/graphql';

/* root imports: view components */
import { Login } from 'features/Login';
import { Home } from 'features/Home';

/* root imports: common */
import { history } from 'config/history';
import { useStore } from 'context';

const Routes: React.FC = observer(() => {
	const { pathname } = history.location;
	const { isInitialized } = useStore();

	const {
		data: currentUserData,
		loading: isCurrentUserLoading,
	} = useCurrentUserQuery();

	if (isCurrentUserLoading) return null;

	const user = currentUserData ? currentUserData.currentUser : undefined;

	const isAuthenticated = !!user;

	const accessibleForUnauthorized = isInitialized && !isAuthenticated;

	const accessibleForAuthorized = isInitialized && isAuthenticated;

	const notAccessibleForUnauthorized =
		isInitialized && !isAuthenticated && pathname !== '/login';

	const notAccessibleForAuthorized =
		isInitialized && isAuthenticated && pathname === '/login';

	return (
		<Router history={history}>
			<Switch>
				{accessibleForAuthorized && <Route exact path="/" component={Home} />}
				{accessibleForUnauthorized && (
					<Route exact path="/login" component={Login} />
				)}
				{notAccessibleForAuthorized && <Redirect to="/" />}
				{notAccessibleForUnauthorized && <Redirect to="/login" />}
			</Switch>
		</Router>
	);
});

export { Routes };
