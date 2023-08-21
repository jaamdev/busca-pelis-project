import { useReducer } from 'react';
import {
	ACTIONS_TYPES,
	initialState,
	storageReducer,
} from '../reducers/storage.js';

export default function useStorageReducer() {
	const [state, dispatch] = useReducer(storageReducer, initialState);

	const addToStorage = movie =>
		dispatch({
			type: ACTIONS_TYPES.ADD_TO_STORAGE,
			payload: movie,
		});

	const removeFromStorage = movie =>
		dispatch({
			type: ACTIONS_TYPES.REMOVE_FROM_STORAGE,
			payload: movie,
		});

	const clearStorage = () =>
		dispatch({
			type: ACTIONS_TYPES.CLEAR_STORAGE,
		});

	return { state, addToStorage, removeFromStorage, clearStorage };
}
