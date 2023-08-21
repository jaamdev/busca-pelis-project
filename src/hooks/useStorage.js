import { useContext } from 'react';
import { StorageContext } from '../context/storage.jsx';

export default function useStorage() {
	const context = useContext(StorageContext);

	if (context === undefined) {
		throw new Error('useStorage debe estar dentro de MoviesProvider');
	}

	return context;
}
