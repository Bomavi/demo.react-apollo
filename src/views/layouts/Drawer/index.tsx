/* npm imports: common */
import React, { useEffect } from 'react';

/* npm imports: material-ui/core */
import MUIDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

/* root imports: common */
import { useStore } from 'context';
import { toggleDrawer } from 'context/store/actions';

/* local imports: common */
import { useStyles } from './styles';
import { SwitchTheme } from './SwitchTheme';
import { Logout } from './Logout';

const Drawer: React.FC = () => {
	const classes = useStyles();

	const [{ isDrawerOpen }, dispatch] = useStore();

	useEffect(() => {
		return () => {
			dispatch(toggleDrawer(false));
		};
	}, [dispatch]);

	return (
		<MUIDrawer anchor="right" variant="persistent" open={isDrawerOpen}>
			<div className={classes.toolbar} />
			<List>
				<SwitchTheme />
			</List>
			<Divider />
			<List>
				<Logout />
			</List>
		</MUIDrawer>
	);
};

export { Drawer };
