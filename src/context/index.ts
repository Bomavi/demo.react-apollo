import { useContext } from 'react';

import { AppContext } from './app';

export const useAppContext = () => useContext(AppContext);
