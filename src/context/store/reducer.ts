// import { Reducer } from 'react';
import { SortDirection } from 'generated/graphql';

// import * as types from './types';
import {
	Action,
	isSetInitializeAction,
	isSetTasksSearchKeyAction,
	isToggleDrawerAction,
	isToggleTasksSortOrderAction,
} from './actions';

export interface StoreState {
	isAppInitialized: boolean;
	isDrawerOpen: boolean;
	tasksSortOrder: SortDirection;
	tasksSearchKey: string;
}

export const defaultState: StoreState = {
	isAppInitialized: false,
	isDrawerOpen: false,
	tasksSortOrder: SortDirection.Asc,
	tasksSearchKey: '',
};

export const reducer = (state: StoreState, action: Action): StoreState => {
	if (isSetInitializeAction(action)) {
		return { ...state, isAppInitialized: true };
	}

	if (isSetTasksSearchKeyAction(action)) {
		return { ...state, tasksSearchKey: (action as any).payload };
	}

	if (isToggleDrawerAction(action)) {
		return {
			...state,
			isDrawerOpen:
				typeof (action as any).payload === 'boolean'
					? (action as any).payload
					: !state.isDrawerOpen,
		};
	}

	if (isToggleTasksSortOrderAction(action)) {
		return {
			...state,
			tasksSortOrder:
				state.tasksSortOrder === SortDirection.Asc
					? SortDirection.Desc
					: SortDirection.Asc,
		};
	}

	return state;

	// switch (action.type) {
	// 	case types.SET_INITIALIZE: {
	// 		return { ...state, isAppInitialized: true };
	// 	}

	// 	case types.TOGGLE_DRAWER: {
	// 		return {
	// 			...state,
	// 			isDrawerOpen:
	// 				typeof action.payload === 'boolean'
	// 					? action.payload
	// 					: !state.isDrawerOpen,
	// 		};
	// 	}

	// 	case types.SET_TASKS_SEARCH_KEY: {
	// 		return { ...state, tasksSearchKey: action.payload };
	// 	}

	// 	case types.TOGGLE_TASKS_SORT_ORDER: {
	// 		return {
	// 			...state,
	// 			tasksSortOrder:
	// 				state.tasksSortOrder === SortDirection.Asc
	// 					? SortDirection.Desc
	// 					: SortDirection.Asc,
	// 		};
	// 	}

	// 	default: {
	// 		return state;
	// 	}
	// }
};
