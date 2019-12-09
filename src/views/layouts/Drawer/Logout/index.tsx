/* npm imports: common */
import React, { useCallback } from 'react';

/* root imports: graphql */
import { useLogoutMutation, CurrentUserDocument } from 'generated/graphql';

/* local imports: common */
import { DrawerItem } from './../DrawerItem';

export const Logout: React.FC = () => {
	const [logout, { loading: logoutInProgress }] = useLogoutMutation();

	const logoutHandler = useCallback(() => {
		logout({ refetchQueries: () => [{ query: CurrentUserDocument }] });
	}, [logout]);

	return (
		<DrawerItem
			text="Logout"
			iconName="logout-variant"
			inProgress={logoutInProgress}
			onClick={logoutHandler}
		/>
	);
};
