export const initialState =
	JSON.parse(window.localStorage.getItem('storage')) || [];

export const ACTIONS_TYPES = {
	ADD_TO_STORAGE: 'ADD_TO_STORAGE',
	REMOVE_FROM_STORAGE: 'REMOVE_FROM_STORAGE',
	CLEAR_STORAGE: 'CLEAR_STORAGE',
};

function updateLocalStorage(storage) {
	window.localStorage.setItem('storage', JSON.stringify(storage));
}

const UPDATE_STORAGE = {
	[ACTIONS_TYPES.ADD_TO_STORAGE]: (state, action) => {
		const { id } = action.payload;
		const itemIndex = state.findIndex(item => item.id === id);

		if (itemIndex === -1) {
			const newStorage = [
				{
					...action.payload,
				},
				...state,
			];
			updateLocalStorage(newStorage);
			return newStorage;
		}
	},
	[ACTIONS_TYPES.REMOVE_FROM_STORAGE]: (state, action) => {
		const { id } = action.payload;
		const newStorage = state.filter(item => item.id !== id);
		updateLocalStorage(newStorage);
		return newStorage;
	},
	[ACTIONS_TYPES.CLEAR_STORAGE]: () => {
		window.localStorage.clear();
		return [];
	},
};

export const storageReducer = (state, action) => {
	const { type } = action;
	const updateState = UPDATE_STORAGE[type];
	return updateState ? updateState(state, action) : state;
};
