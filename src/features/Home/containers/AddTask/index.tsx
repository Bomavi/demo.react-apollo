/* npm imports: common */
import React, { useCallback } from 'react';

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

const AddTask: React.FC = () => {
	// const classes = useStyles();

	const [{ tasksSortOrder }] = useStore();

	const [createTask, { loading }] = useCreateTaskMutation({
		update: (cache, { data: createTaskData }) => {
			const variables = {
				sortBy: tasksSortOrder,
			};

			const { searchTasks } = cache.readQuery<SearchTasksQuery>({
				query: SearchTasksDocument,
				variables,
			})!;

			const updatedTasks =
				tasksSortOrder === SortDirection.Asc
					? [createTaskData && createTaskData.createTask, ...searchTasks]
					: [...searchTasks, createTaskData && createTaskData.createTask];

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
};

export { AddTask };
