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
import { useAppContext } from 'context';

/* local imports: common */
import { useStyles } from './styles';

const TaskList: React.FC = () => {
	const classes = useStyles();

	const [{ tasksSortOrder }, setContext] = useAppContext();

	const { data: searchTasksData } = useSearchTasksQuery();
	const { searchTasks: tasks } = searchTasksData!;

	const tasksLength = tasks.length;
	const isEmpty = tasksLength === 0;

	const sortTasksHandler = useCallback(() => {
		if (tasksSortOrder === 'asc') {
			setContext(ctx => ({ ...ctx, tasksSortOrder: 'desc' }));
		} else if (tasksSortOrder === 'desc') {
			setContext(ctx => ({ ...ctx, tasksSortOrder: 'asc' }));
		}
	}, [tasksSortOrder, setContext]);

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
				? tasks.map((task, i) => (
						<motion.div key={task.id} positionTransition>
							<Task task={task} isLastChild={tasksLength === i + 1} />
						</motion.div>
				  ))
				: 'no tasks'}
		</Paper>
	);
};

export { TaskList };
