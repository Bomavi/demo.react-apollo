/* npm imports: common */
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

/* npm imports: material-ui/core */
import MUIDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

/* root imports: common */
import { useStore } from 'context';

/* local imports: common */
import { useStyles } from './styles';
import { SwitchTheme } from './SwitchTheme';
import { Logout } from './Logout';

const Drawer: React.FC = observer(() => {
	const classes = useStyles();
	const store = useStore();

	useEffect(() => {
		return () => {
			store.toggleDrawer(false);
		};
	}, [store]);

	return (
		<MUIDrawer anchor="right" variant="persistent" open={store.isDrawerOpen}>
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
});

export { Drawer };
