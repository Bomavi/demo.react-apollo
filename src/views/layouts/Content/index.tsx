/* npm imports: common */
import React from 'react';

/* root imports: graphql */
import { useCurrentUserQuery } from 'generated/graphql';

/* root imports: view components */
import { Header, Footer, Drawer } from 'views/layouts';

/* local imports: common */
import { useStyles } from './styles';

const Content: React.FC = React.memo(({ children }) => {
	const classes = useStyles();

	const { data: currentUserData } = useCurrentUserQuery();
	const currentUser = currentUserData ? currentUserData.currentUser : undefined;

	return (
		<>
			<Header />
			<div className={classes.toolbar} />
			{currentUser && <Drawer />}
			<main className={classes.main}>{children}</main>
			<Footer />
		</>
	);
});

export { Content };
