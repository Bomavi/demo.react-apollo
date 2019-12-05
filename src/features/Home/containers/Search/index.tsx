/* npm imports: common */
import React, { useCallback, useEffect, useRef } from 'react';

/* root imports: graphql */
import { useSearchTasksLazyQuery } from 'generated/graphql';

/* root imports: view components */
import { CustomInput } from 'views/elements';

/* root imports: common */
import { debounce, debounceTiming } from 'utils/helpers';

/* local imports: common */
// import { useStyles } from './styles';

const Search: React.FC = () => {
	// const classes = useStyles();

	const isInitialized = useRef(false);
	const prevSearch = useRef('');

	const [searchTasks, { loading }] = useSearchTasksLazyQuery();

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
			searchTasks({ variables: { q } });
		},
		[searchTasks]
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
