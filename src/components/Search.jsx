import useMovies from '../hooks/useMovies.js';
import { SearchIcon } from './Icons.jsx';

export default function Search() {
	const { error, handleSubmit } = useMovies();

	return (
		<section className='search-ctn'>
			<form className='search-form' autoComplete='off' onSubmit={handleSubmit}>
				<label htmlFor='search'>
					<SearchIcon />
				</label>
				<input
					type='text'
					name='search'
					id='search'
					placeholder='Matrix, Avengers...'
				/>
				<button className='search-btn'>Buscar</button>
			</form>
			{error && <h4 className='info'>{error}</h4>}
		</section>
	);
}
