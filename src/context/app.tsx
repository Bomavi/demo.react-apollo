import React, { createContext, useState } from 'react';

export interface AppState {
	isDrawerOpen: boolean;
	tasksSortOrder: 'asc' | 'desc';
}

const defaultState: AppState = {
	isDrawerOpen: false,
	tasksSortOrder: 'asc',
};

export type AppContextProps = [AppState, React.Dispatch<React.SetStateAction<AppState>>];

export const AppContext = createContext<AppContextProps>([
	defaultState,
	() => defaultState,
]);

export const AppContextProvider: React.FC = ({ children }) => {
	const [state, setState] = useState(defaultState);

	return (
		<AppContext.Provider value={[state, setState]}>{children}</AppContext.Provider>
	);
};
