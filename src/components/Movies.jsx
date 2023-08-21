import useMovies from '../hooks/useMovies.js';
import useStorage from '../hooks/useStorage.js';

export default function Movies() {
	const { movies, loading } = useMovies();
	const { storage, addToStorage, removeFromStorage } = useStorage();

	return (
		<main className='movies-ctn'>
			{loading ? (
				<p>Cargando...</p>
			) : (
				<LoadMovies
					movies={movies}
					storage={storage}
					addToStorage={addToStorage}
					removeFromStorage={removeFromStorage}
				/>
			)}
		</main>
	);
}

function LoadMovies({ movies, storage, addToStorage, removeFromStorage }) {
	const hasMovies = movies?.length > 0;

	return hasMovies ? (
		<ListMovies
			movies={movies}
			storage={storage}
			addToStorage={addToStorage}
			removeFromStorage={removeFromStorage}
		/>
	) : (
		<NoMovies movies={movies} />
	);
}

function ListMovies({ movies, storage, addToStorage, removeFromStorage }) {
	const sortedMovies = movies.sort((a, b) => b.year - a.year);

	return (
		<ul>
			{sortedMovies?.map(movie => {
				const IsMovieInStorage = storage.some(item => item.id === movie.id);

				return (
					<li key={movie.id} className={IsMovieInStorage ? 'active' : ''}>
						<img src={movie.img} alt={`Póster de la película ${movie.title}`} />
						<h2>{movie.title}</h2>
						<h3>Año: {movie.year}</h3>
						{IsMovieInStorage ? (
							<button
								className='removefromstorage-btn'
								title='Borrar peli de la lista.'
								onClick={() => removeFromStorage(movie)}
							>
								x
							</button>
						) : (
							<button
								className='addstorage-btn'
								title='Añadir peli a la lista.'
								onClick={() => addToStorage(movie)}
							>
								+
							</button>
						)}
					</li>
				);
			})}
		</ul>
	);
}

function NoMovies({ movies }) {
	return (
		<>
			{movies?.length === 0 ? (
				''
			) : (
				<h4 className='info'>No se encontraron películas</h4>
			)}
		</>
	);
}
