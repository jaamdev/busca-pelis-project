import { createContext } from 'react';
import useStorageReducer from '../hooks/useStorageReducer.js';

export const StorageContext = createContext();

export function StorageProvider({ children }) {
	const { state, addToStorage, removeFromStorage, clearStorage } =
		useStorageReducer();

	return (
		<StorageContext.Provider
			value={{
				storage: state,
				addToStorage,
				removeFromStorage,
				clearStorage,
			}}
		>
			{children}
		</StorageContext.Provider>
	);
}
