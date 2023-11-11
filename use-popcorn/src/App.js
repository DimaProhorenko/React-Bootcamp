import { useState } from 'react';
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
import { useMovies } from './useMovies';
import { useLocalStorageState } from './useLocalStorageState';

export default function App() {
	const [query, setQuery] = useState('');

	const { movies, isLoading, error } = useMovies(query);
	const [watched, setWatched] = useLocalStorageState([], 'watched');

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
		const isMovieInTheList =
			watched.findIndex((item) => item.imdbID === movie.imdbID) > -1;
		if (!isMovieInTheList) {
			setWatched((prevState) => [...prevState, movie]);
		}
		closeMovieHandler();
	};

	const deleteWatchedHandler = (id) => {
		setWatched((prevState) =>
			prevState.filter((item) => item.imdbID !== id)
		);
	};

	return (
		<>
			<Navbar>
				<SearchBar
					query={query}
					setQuery={setQuery}
					onClose={closeMovieHandler}
				/>
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
							<WatchedList
								watched={watched}
								onDeleteMovie={deleteWatchedHandler}
							/>
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
