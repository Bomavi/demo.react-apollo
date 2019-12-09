/* npm imports: common */
import React, { useCallback } from 'react';

/* npm imports: material-ui/core */
import Paper from '@material-ui/core/Paper';

/* root imports: graphql */
import { useLoginMutation, CurrentUserDocument } from 'generated/graphql';

/* root imports: common */
import { Subtitle, LoginButton } from 'features/Login/components';

/* local imports: common */
import { useStyles } from './styles';

const GuestForm: React.FC = React.memo(() => {
	const classes = useStyles();
	const [login] = useLoginMutation({
		update: (cache, { data: loginData }) => {
			cache.writeQuery({
				query: CurrentUserDocument,
				data: { currentUser: loginData && loginData.login },
			});
		},
	});

	const loginHandler = useCallback(() => {
		login({ variables: { isGuest: true } });
	}, [login]);

	return (
		<Paper className={classes.paper}>
			<Subtitle>Use Guest Access</Subtitle>
			<div className={classes.wrapper}>
				<LoginButton gradient="primary" onClick={loginHandler}>
					Get access
				</LoginButton>
			</div>
		</Paper>
	);
});

export { GuestForm };
