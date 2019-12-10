/* npm imports: common */
import React, { useCallback, useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';

/* root imports: graphql */
import { useSearchTasksQuery } from 'generated/graphql';

/* root imports: view components */
import { CustomInput } from 'views/elements';

/* root imports: common */
import { debounce, debounceTiming } from 'utils/helpers';
import { useStore } from 'context';

/* local imports: common */
// import { useStyles } from './styles';

const Search: React.FC = observer(() => {
	// const classes = useStyles();
	const store = useStore();

	const isInitialized = useRef(false);
	const prevSearch = useRef('');

	const { loading } = useSearchTasksQuery({
		variables: {
			q: store.tasksSearchKey,
			sortBy: store.tasksSortOrder,
		},
	});

	const changeHandler = useCallback(
		debounce((value: string) => {
			if (!isInitialized.current && value === '') {
				isInitialized.current = true;
			} else if (value !== prevSearch.current) {
				prevSearch.current = value;
				searchHandler(value);
			}
		}, debounceTiming.input),
		[]
	);

	const searchHandler = useCallback(
		q => {
			store.setTasksSearchKey(q);
		},
		[store]
	);

	useEffect(() => {
		return () => {
			if (prevSearch.current !== '') searchHandler('');
		};
	}, [searchHandler]);

	return (
		<CustomInput
			icon={{
				name: 'magnify',
				svgSize: 'md',
			}}
			isFetching={loading}
			placeholder="Type to search..."
			onChange={changeHandler}
		/>
	);
});

export { Search };
