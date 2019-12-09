/* npm imports: common */
import React, { useCallback } from 'react';
import { motion } from 'framer-motion';

/* npm imports: material-ui/core */
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

/* root imports: graphql */
import { useSearchTasksQuery } from 'generated/graphql';

/* root imports: view components */
import { Task } from 'features/Home/containers';
import { SortButton } from 'features/Home/components';

/* root imports: common */
import { useStore } from 'context';
import { toggleTasksSortOrder } from 'context/store/actions';

/* local imports: common */
import { useStyles } from './styles';

const TaskList: React.FC = React.memo(() => {
	const classes = useStyles();

	const [{ tasksSortOrder, tasksSearchKey }, dispatch] = useStore();

	const { data: searchTasksData } = useSearchTasksQuery({
		variables: {
			q: tasksSearchKey,
			sortBy: tasksSortOrder,
		},
	});

	const sortTasksHandler = useCallback(() => {
		dispatch(toggleTasksSortOrder());
	}, [dispatch]);

	const tasks = searchTasksData ? searchTasksData.searchTasks : [];

	const uncompleteTaskFirst = React.useMemo(
		() => tasks.sort((a, b) => Number(a.completed) - Number(b.completed)),
		[tasks]
	);

	const tasksLength = tasks.length;
	const isEmpty = tasksLength === 0;

	return (
		<Paper className={classes.root}>
			<div className={classes.header}>
				<Typography className={classes.title} noWrap variant="subtitle2">
					Task List &nbsp;&nbsp;
					{!isEmpty && '|'}
					&nbsp;&nbsp;&nbsp;
					{!isEmpty && `${tasksLength}`}
				</Typography>
				<SortButton
					sortKey={tasksSortOrder}
					disabled={isEmpty}
					onClick={sortTasksHandler}
				/>
			</div>
			{!isEmpty
				? uncompleteTaskFirst.map((task, i) => (
						<motion.div key={task.id} positionTransition>
							<Task task={task} isLastChild={tasksLength === i + 1} />
						</motion.div>
				  ))
				: 'no tasks'}
		</Paper>
	);
});

export { TaskList };
