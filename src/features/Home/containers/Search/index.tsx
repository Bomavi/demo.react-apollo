/* npm imports: common */
import React, { useCallback, useEffect, useRef } from 'react';

/* root imports: graphql */
import { useSearchTasksQuery } from 'generated/graphql';

/* root imports: view components */
import { CustomInput } from 'views/elements';

/* root imports: common */
import { debounce, debounceTiming } from 'utils/helpers';
import { useStore } from 'context';
import { setTasksSearchKey } from 'context/store/actions';

/* local imports: common */
// import { useStyles } from './styles';

const Search: React.FC = () => {
	// const classes = useStyles();

	const [{ tasksSortOrder, tasksSearchKey }, dispatch] = useStore();

	const isInitialized = useRef(false);
	const prevSearch = useRef('');

	const { loading } = useSearchTasksQuery({
		variables: {
			q: tasksSearchKey,
			sortBy: tasksSortOrder,
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
			dispatch(setTasksSearchKey(q));
		},
		[dispatch]
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
};

export { Search };
