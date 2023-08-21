const apiKey = '4287ad07';
// ApiKey fue proporcionada por Midudev en uno de sus directos en twitch

export default async function searchMovies({ search }) {
	try {
		const response = await fetch(
			`https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${search}`,
		);
		const data = await response.json();

		const results = data.Search;

		return results?.map(movie => ({
			id: movie.imdbID,
			title: movie.Title,
			year: movie.Year,
			type: movie.Type,
			img: movie.Poster,
		}));
	} catch (e) {
		throw new Error('Error buscando películas');
	}
}
