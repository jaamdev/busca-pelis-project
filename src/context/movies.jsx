import { createContext, useRef, useState } from 'react';
import searchMovies from '../services/searchMovies.js';

export const MoviesContext = createContext();

export function MoviesProvider({ children }) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const prevSearch = useRef('');

	const getMovies = async search => {
		if (search === '') {
			setError('La búsqueda no debe estar vacía');
			return;
		}
		if (search.match(/^\d+$/)) {
			setError('La búsqueda no debe empezar con un número');
			return;
		}
		if (search.length <= 2) {
			setError('La búsqueda debe tener más de 2 caracteres');
			return;
		}
		if (search !== prevSearch.current) {
			try {
				setError(null);
				setLoading(true);
				prevSearch.current = search;
				const newSearch = await searchMovies({ search });
				setMovies(newSearch);
			} catch (e) {
				throw new Error(e.message);
			} finally {
				setLoading(false);
			}
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		const { search } = Object.fromEntries(new FormData(e.target));
		getMovies(search);
	};

	return (
		<MoviesContext.Provider
			value={{
				movies,
				loading,
				error,
				handleSubmit,
			}}
		>
			{children}
		</MoviesContext.Provider>
	);
}
