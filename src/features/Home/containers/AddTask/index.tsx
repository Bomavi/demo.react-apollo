/* npm imports: common */
import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';

/* root imports: graphql */
import {
	useCreateTaskMutation,
	SearchTasksDocument,
	SearchTasksQuery,
	SortDirection,
} from 'generated/graphql';

/* root imports: view components */
import { CustomInput } from 'views/elements';

/* root imports: common */
import { useStore } from 'context';

/* local imports: common */
// import { useStyles } from './styles';

const AddTask: React.FC = observer(() => {
	// const classes = useStyles();
	const store = useStore();

	const [createTask, { loading }] = useCreateTaskMutation({
		update: (cache, { data: createTaskData }) => {
			if (!createTaskData || !createTaskData.createTask) return;

			const variables = {
				q: store.tasksSearchKey,
				sortBy: store.tasksSortOrder,
			};

			const query = cache.readQuery<SearchTasksQuery>({
				query: SearchTasksDocument,
				variables,
			});

			const tasks = query ? query.searchTasks : [];

			const updatedTasks =
				store.tasksSortOrder === SortDirection.Desc
					? [createTaskData.createTask, ...tasks]
					: [...tasks, createTaskData.createTask];

			cache.writeQuery({
				query: SearchTasksDocument,
				variables,
				data: {
					searchTasks: updatedTasks,
				},
			});
		},
	});

	const actionHandler = useCallback(
		value => {
			if (value) {
				createTask({ variables: { description: value, completed: false } });
			}
		},
		[createTask]
	);

	return (
		<CustomInput
			icon={{
				name: 'plus',
				svgSize: 'md',
				title: 'Add',
			}}
			isFetching={loading}
			placeholder="Type task description..."
			onClick={actionHandler}
		/>
	);
});

export { AddTask };
