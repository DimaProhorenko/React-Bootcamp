import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SearchCounter from './components/SearchCounter';
import Main from './components/Main';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import Box from './components/Box';
import WatchedSummary from './components/WatchedSummary';
import WatchedList from './components/WatchedList';
import Loader from './components/Loader';
import ErrorMsg from './components/ErrorMsg';
import MovieDetails from './components/MovieDetails';
import { searchMovies } from './fetchHelpers';

export default function App() {
	const [movies, setMovies] = useState([]);
	const [watched, setWatched] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [query, setQuery] = useState('');
	const [selectedMovieId, setSelectedMovieId] = useState(null);

	const selectMovieHandler = async (id) => {
		if (id === selectedMovieId) {
			setSelectedMovieId(null);
		} else {
			setSelectedMovieId(id);
		}
	};

	const closeMovieHandler = () => {
		setSelectedMovieId(null);
	};

	const addWatchedHandler = (movie) => {
		setWatched((prevState) => [...prevState, movie]);
		closeMovieHandler();
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				setError('');
				const fetchedMovies = await searchMovies(query);
				setMovies(
					fetchedMovies?.Response === 'True'
						? fetchedMovies.Search
						: []
				);
				setIsLoading(false);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
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
				</Box>
				<Box>
					{selectedMovieId === null ? (
						<>
							<WatchedSummary watched={watched} />
							<WatchedList watched={watched} />
						</>
					) : (
						<MovieDetails
							selectedId={selectedMovieId}
							onClose={closeMovieHandler}
							onAddWatched={addWatchedHandler}
						/>
					)}
				</Box>
			</Main>
		</>
	);
}
