import React, { createContext, useReducer, Dispatch } from 'react';

import { reducer, defaultState, StoreState } from './reducer';
import { Action } from './actions';

export type StoreContextProps = [StoreState, Dispatch<Action>];

export const StoreContext = createContext<StoreContextProps>([defaultState, () => ({})]);

export const StoreContextProvider: React.FC = ({ children }) => {
	return (
		<StoreContext.Provider value={useReducer(reducer, defaultState)}>
			{children}
		</StoreContext.Provider>
	);
};
