import { useState, useEffect } from 'react';
import { searchMovies } from './fetchHelpers';

export const useMovies = (query) => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

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

	return { movies, isLoading, error };
};
