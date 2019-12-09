/* npm imports: common */
import React, { useEffect } from 'react';

/* npm imports: material-ui/core */
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

/* root imports: graphql */
import { useCurrentUserQuery, Theme } from 'generated/graphql';

/* root imports: view components */
import { Content } from 'views/layouts';

/* root imports: common */
import { Routes } from 'routes';
import { useStore } from 'context';
import { setInitialize } from 'context/store/actions';
import { lightTheme, darkTheme } from 'utils/themes';

/* local imports: common */
import { useStyles } from './styles';

export const getSelectedTheme = (theme: Theme) => {
	switch (theme) {
		case Theme.Light:
			return lightTheme;

		case Theme.Dark:
			return darkTheme;

		default:
			return lightTheme;
	}
};

const App: React.FC = React.memo(() => {
	const classes = useStyles();

	const [, dispatch] = useStore();

	const { data: currentUserData } = useCurrentUserQuery();
	const currentUser = currentUserData ? currentUserData.currentUser : undefined;

	useEffect(() => {
		dispatch(setInitialize());
	}, [dispatch]);

	const theme = currentUser ? currentUser.theme : Theme.Light;

	return (
		<ThemeProvider theme={getSelectedTheme(theme)}>
			<>
				<CssBaseline />
				<div className={classes.app}>
					<Content>
						<Routes />
					</Content>
				</div>
			</>
		</ThemeProvider>
	);
});

export { App };
