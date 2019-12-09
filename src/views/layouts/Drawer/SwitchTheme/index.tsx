/* npm imports: common */
import React from 'react';

/* root imports: graphql */
import { useCurrentUserQuery, useUpdateUserMutation, Theme } from 'generated/graphql';

/* local imports: common */
import { DrawerItem } from './../DrawerItem';

export const getThemeNameToSwitch = (theme: Theme): Theme => {
	switch (theme) {
		case Theme.Light:
			return Theme.Dark;

		case Theme.Dark:
			return Theme.Light;

		default:
			return Theme.Light;
	}
};

export const SwitchTheme: React.FC = () => {
	const { data: currentUserData } = useCurrentUserQuery();
	const currentUser = currentUserData ? currentUserData.currentUser : undefined;

	const [updateUser, { loading: isUserUpdating }] = useUpdateUserMutation();

	if (!currentUser) return null;

	const { id, theme } = currentUser;

	const themeNameToSwitch = getThemeNameToSwitch(theme);

	const switchThemeHandler = () => {
		updateUser({
			variables: { id, theme: themeNameToSwitch },
		});
	};

	return (
		<DrawerItem
			text={`Switch to ${themeNameToSwitch} theme`}
			iconName="compare"
			inProgress={isUserUpdating}
			onClick={switchThemeHandler}
		/>
	);
};
