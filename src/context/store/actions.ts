import * as types from './types';

/* Action base types */
export type ActionType =
	| 'SET_INITIALIZE'
	| 'TOGGLE_DRAWER'
	| 'SET_TASKS_SEARCH_KEY'
	| 'TOGGLE_TASKS_SORT_ORDER';

export interface Action {
	type: ActionType;
}

/* Action - setInitialize */
export interface SetInitializeAction extends Action {}

export const isSetInitializeAction = (action: Action): action is SetInitializeAction => {
	return action.type === types.SET_INITIALIZE;
};

export const setInitialize = (): SetInitializeAction => ({
	type: types.SET_INITIALIZE,
});

/* Action - toggleDrawer */
export interface ToggleDrawerAction extends Action {
	payload?: boolean;
}

export const isToggleDrawerAction = (action: Action): action is ToggleDrawerAction => {
	return action.type === types.TOGGLE_DRAWER;
};

export const toggleDrawer = (payload?: boolean): ToggleDrawerAction => ({
	type: types.TOGGLE_DRAWER,
	payload,
});

/* Action - setTasksSearchKey */
export interface SetTasksSearchKeyAction extends Action {
	payload: string;
}

export const isSetTasksSearchKeyAction = (
	action: Action
): action is SetTasksSearchKeyAction => {
	return action.type === types.SET_TASKS_SEARCH_KEY;
};

export const setTasksSearchKey = (payload: string): SetTasksSearchKeyAction => ({
	type: types.SET_TASKS_SEARCH_KEY,
	payload,
});

/* Action - toggleTasksSortOrder */
export interface ToggleTasksSortOrderAction extends Action {}

export const isToggleTasksSortOrderAction = (
	action: Action
): action is ToggleTasksSortOrderAction => {
	return action.type === types.TOGGLE_TASKS_SORT_ORDER;
};

export const toggleTasksSortOrder = (): ToggleTasksSortOrderAction => ({
	type: types.TOGGLE_TASKS_SORT_ORDER,
});
