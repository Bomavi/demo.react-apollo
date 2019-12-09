/* npm imports: material-ui/core */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {},
		paper: {
			padding: 20,
		},
		wrapper: {
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			minHeight: 60,
			padding: 25,
			backgroundColor: theme.palette.background.default,
			borderRadius: 4,
		},
	})
);
