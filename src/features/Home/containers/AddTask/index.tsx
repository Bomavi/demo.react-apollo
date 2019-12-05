/* npm imports: common */
import React, { useCallback } from 'react';

/* root imports: graphql */
import { useCreateTaskMutation } from 'generated/graphql';

/* root imports: view components */
import { CustomInput } from 'views/elements';

/* local imports: common */
// import { useStyles } from './styles';

const AddTask: React.FC = () => {
	// const classes = useStyles();

	const [createTask, { loading }] = useCreateTaskMutation();

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
