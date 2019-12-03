/* npm imports: common */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/* npm imports: material-ui/core */
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';

/* root imports: view components */
import { Icon } from 'views/elements';

/* local imports: common */
import { useStyles } from './styles';

const TaskActions = React.memo(({ children, disabled, onDelete, onEdit, isFetching }) => {
	const classes = useStyles();

	if (isFetching) {
		return (
			<div className={cx(classes.root, 'small')}>
				<CircularProgress size={18} thickness={4} color="inherit" />
			</div>
		);
	}

	if (!onDelete && children) {
		return <div className={classes.root}>{children}</div>;
	}

	return (
		<div className={classes.root}>
			<div className={classes.iconButtonWrapper}>
				<IconButton
					className={classes.iconButton}
					disabled={disabled || isFetching}
					title="Edit"
					onClick={onEdit}
				>
					<Icon name="pencil" size="sm" />
				</IconButton>
			</div>
			<div className={classes.iconButtonWrapper}>
				<IconButton
					className={classes.iconButton}
					disabled={disabled || isFetching}
					title="Delete"
					onClick={onDelete}
				>
					<Icon name="delete" size="sm" />
				</IconButton>
			</div>
		</div>
	);
});

TaskActions.propTypes = {
	disabled: PropTypes.bool,
	onDelete: PropTypes.func,
	onEdit: PropTypes.func.isRequired,
	isFetching: PropTypes.bool,
};

TaskActions.defaultProps = {
	isFetching: false,
};

export { TaskActions };
