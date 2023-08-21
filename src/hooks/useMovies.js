import { useContext } from 'react';
import { MoviesContext } from '../context/movies.jsx';

export default function useMovies() {
	const context = useContext(MoviesContext);

	if (context === undefined) {
		throw new Error('useMovies debe estar dentro de MoviesProvider');
	}

	return context;
}
