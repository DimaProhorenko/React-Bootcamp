import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SearchCounter from './components/SearchCounter';
import Main from './components/Main';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import Box from './components/Box';
import WatchedSummary from './components/WatchedSummary';
import WatchedList from './components/WatchedList';
import { API_KEY } from './key';
import Loader from './components/Loader';
import ErrorMsg from './components/ErrorMsg';
import MovieDetails from './components/MovieDetails';

const tempMovieData = [
	{
		imdbID: 'tt1375666',
		Title: 'Inception',
		Year: '2010',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
	},
	{
		imdbID: 'tt0133093',
		Title: 'The Matrix',
		Year: '1999',
		Poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
	},
	{
		imdbID: 'tt6751668',
		Title: 'Parasite',
		Year: '2019',
		Poster: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
	},
];

const tempWatchedData = [
	{
		imdbID: 'tt1375666',
		Title: 'Inception',
		Year: '2010',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
		runtime: 148,
		imdbRating: 8.8,
		userRating: 10,
	},
	{
		imdbID: 'tt0088763',
		Title: 'Back to the Future',
		Year: '1985',
		Poster: 'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
		runtime: 116,
		imdbRating: 8.5,
		userRating: 9,
	},
];

export default function App() {
	const [movies, setMovies] = useState([]);
	const [watched, setWatched] = useState(tempWatchedData);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [query, setQuery] = useState('');
	const [selectedMovie, setSelectedMovie] = useState(null);

	const selectMovieHandler = async (id) => {
		if (id === selectedMovie?.imdbID) {
			setSelectedMovie(null);
		} else {
			const movieResult = await searchMovieById(id);
			setSelectedMovie(movieResult);
		}
	};

	const closeMovieHandler = () => {
		setSelectedMovie(null);
	};

	const searchMovieById = async (id) => {
		const result = await fetchData(`&i=${id}`);
		return result;
	};

	const fetchData = async (subString) => {
		try {
			const searchString = `https://www.omdbapi.com/?apikey=${API_KEY}${subString}`;
			const res = await fetch(searchString);
			if (!res.ok) throw new Error('Something went wrong');
			const data = await res.json();
			console.log(data);

			if (data.Response !== 'True') throw new Error(data.Error);
			return data;
		} catch (err) {
			setError(err.message);
		}
	};

	const searchMovies = async (query) => {
		const result = await fetchData(`&s=${query}`);
		return result;
	};

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			setError('');
			const fetchedMovies = await searchMovies(query);
			setMovies(
				fetchedMovies?.Response === 'True' ? fetchedMovies.Search : []
			);
			setIsLoading(false);
		};

		if (query.length < 3) {
			setMovies([]);
			setError('');
			setIsLoading(false);
			return;
		}

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	return (
		<>
			<Navbar>
				<SearchBar query={query} setQuery={setQuery} />
				<SearchCounter movies={movies} />
			</Navbar>
			<Main>
				<Box>
					{isLoading && !error && <Loader />}
					{!isLoading && error && <ErrorMsg msg={error} />}
					{!isLoading && !error && (
						<MovieList
							onSelectMovie={selectMovieHandler}
							movies={movies}
						/>
					)}
					{/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
				</Box>
				<Box>
					{selectedMovie === null ? (
						<>
							<WatchedSummary watched={watched} />
							<WatchedList watched={watched} />
						</>
					) : (
						<MovieDetails
							movie={selectedMovie}
							onClose={closeMovieHandler}
						/>
					)}
				</Box>
			</Main>
		</>
	);
}
