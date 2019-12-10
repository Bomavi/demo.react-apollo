/* npm imports: common */
import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';

/* npm imports: material-ui/core */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

/* root imports: graphql */
import { useCurrentUserQuery } from 'generated/graphql';

/* root imports: view components */
import { Icon } from 'views/elements';

/* root imports: common */
import { useStore } from 'context';

/* local imports: common */
import { useStyles } from './styles';

const Header: React.FC = observer(() => {
	const classes = useStyles();
	const store = useStore();

	const { data: currentUserData } = useCurrentUserQuery();
	const currentUser = currentUserData ? currentUserData.currentUser : undefined;

	const toggleDrawerHandler = useCallback(() => store.toggleDrawer(), [store]);

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<Typography variant="h6" noWrap className={classes.title}>
					TODO'SHER
				</Typography>
				{currentUser && (
					<Typography variant="subtitle2" noWrap className={classes.hello}>
						Hello, {currentUser.username}
					</Typography>
				)}
				{currentUser && (
					<IconButton color="inherit" onClick={toggleDrawerHandler}>
						<Icon
							name="account-circle"
							color="white"
							size="md"
							svgSize="lg"
						/>
					</IconButton>
				)}
			</Toolbar>
		</AppBar>
	);
});

export { Header };
