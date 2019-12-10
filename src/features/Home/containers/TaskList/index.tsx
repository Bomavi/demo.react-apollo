/* npm imports: common */
import React from 'react';
import { observer } from 'mobx-react-lite';
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

/* local imports: common */
import { useStyles } from './styles';

const spring = {
	type: 'spring',
	damping: 50,
	stiffness: 500,
};

const TaskList: React.FC = observer(() => {
	const classes = useStyles();
	const store = useStore();

	const { data: searchTasksData } = useSearchTasksQuery({
		fetchPolicy: 'cache-and-network',
		variables: {
			q: store.tasksSearchKey,
			sortBy: store.tasksSortOrder,
		},
	});

	const tasks = searchTasksData ? searchTasksData.searchTasks : [];

	const uncompletedTaskFirst = React.useMemo(
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
					sortKey={store.tasksSortOrder}
					disabled={isEmpty}
					onClick={store.toggleTasksSortOrder}
				/>
			</div>
			{!isEmpty
				? uncompletedTaskFirst.map((task, i) => (
						<motion.div key={task.id} positionTransition={spring}>
							<Task task={task} isLastChild={tasksLength === i + 1} />
						</motion.div>
				  ))
				: 'no tasks'}
		</Paper>
	);
});

export { TaskList };
