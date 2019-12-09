/* npm imports: common */
import React, { useState, useCallback } from 'react';
import cx from 'classnames';

/* npm imports: material-ui/core */
import Divider from '@material-ui/core/Divider';

/* root imports: graphql */
import {
	Task as TaskEntity,
	useUpdateTaskMutation,
	useDeleteTaskMutation,
	SearchTasksDocument,
	SearchTasksQuery,
} from 'generated/graphql';

/* root imports: view components */
import { TaskCheckbox, TaskActions } from 'features/Home/components';

/* root imports: common */
import { useStore } from 'context';

/* local imports: common */
import { Description } from './Description';
import { EditInput } from './EditInput';
import { Backdrop } from './Backdrop';
import { useStyles } from './styles';

interface TaskProps {
	task: TaskEntity;
	isLastChild: boolean;
}

const Task: React.FC<TaskProps> = React.memo(props => {
	const { task, isLastChild = false } = props;

	const classes = useStyles();

	const [{ tasksSortOrder }] = useStore();

	const [isHovered, setIsHovered] = useState(false);
	const [isEditable, setIsEditable] = useState(false);

	const [updateTask, { loading: updateInProgress }] = useUpdateTaskMutation({
		update: (cache, { data: createTaskData }) => {
			const variables = {
				sortBy: tasksSortOrder,
			};

			const { searchTasks } = cache.readQuery<SearchTasksQuery>({
				query: SearchTasksDocument,
				variables,
			})!;

			cache.writeQuery({
				query: SearchTasksDocument,
				variables,
				data: {
					searchTasks: searchTasks.map(task => {
						const updated = createTaskData && createTaskData.updateTask;

						if (updated && updated.id === task.id) {
							return updated;
						}

						return task;
					}),
				},
			});
		},
	});

	const [deleteTask, { loading: deleteInProgress }] = useDeleteTaskMutation({
		update: (cache, { data: createTaskData }) => {
			const variables = {
				sortBy: tasksSortOrder,
			};

			const { searchTasks } = cache.readQuery<SearchTasksQuery>({
				query: SearchTasksDocument,
				variables,
			})!;

			const deletedTaskId = createTaskData && createTaskData.deleteTask;

			cache.writeQuery({
				query: SearchTasksDocument,
				variables,
				data: {
					searchTasks: searchTasks.filter(task => task.id !== deletedTaskId),
				},
			});
		},
	});

	const mouseEnterHandler = () => {
		setIsHovered(true);
	};

	const mouseLeaveHandler = () => {
		setIsHovered(false);
	};

	const editHandler = useCallback(() => {
		setIsEditable(!isEditable);
		mouseLeaveHandler();
	}, [isEditable]);

	const completeHandler = useCallback(() => {
		updateTask({ variables: { ...task, completed: !task.completed } });
		mouseLeaveHandler();
	}, [task, updateTask]);

	const saveHandler = useCallback(
		value => {
			updateTask({ variables: { ...task, description: value } });
		},
		[task, updateTask]
	);

	const deleteHandler = useCallback(() => {
		deleteTask({ variables: { id: task.id } });
	}, [deleteTask, task.id]);

	return (
		<div
			className={cx(classes.root, { isLastChild })}
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			<TaskCheckbox
				value={task.completed}
				isFetching={updateInProgress}
				onChange={completeHandler}
			/>
			<Divider className={classes.divider} />
			<Description completed={task.completed}>{task.description}</Description>
			{isHovered && !deleteInProgress && <Divider className={classes.divider} />}
			{(isHovered || deleteInProgress) && (
				<TaskActions
					onEdit={editHandler}
					isFetching={deleteInProgress}
					onDelete={deleteHandler}
				/>
			)}
			<Backdrop fadeIn={isEditable} onClick={editHandler} />
			{isEditable && (
				<EditInput
					autoFocus
					isFetching={updateInProgress}
					defaultValue={task.description}
					onClick={saveHandler}
					onCancel={editHandler}
				/>
			)}
		</div>
	);
});

export { Task };
