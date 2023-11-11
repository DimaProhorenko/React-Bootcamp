import React, { useEffect, useState } from 'react';
import { searchMovieById } from '../fetchHelpers';
import StarRating from './StarRating';
import Loader from './Loader';
import { useKey } from '../useKey';

function SelectedMovie({ selectedId, onClose, onAddWatched }) {
	const [movie, setMovie] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [userRating, setUserRating] = useState('');

	const {
		Title: title,
		Poster: poster,
		Year: year,
		Runtime: runtime,
		imdbRating,
		Plot: plot,
		Released: released,
		Actors: actors,
		Director: director,
		Genre: genre,
	} = movie;

	useKey('Escape', onClose);

	useEffect(() => {
		const getData = async () => {
			setIsLoading(true);
			const data = await searchMovieById(selectedId);
			setMovie(data);
			setIsLoading(false);
		};

		getData();
	}, [selectedId]);

	useEffect(() => {
		document.title = `Movie | ${movie.Title || ''}`;
		return () => {
			document.title = 'usePopcorn';
		};
	}, [movie]);

	// useEffect(() => {
	// 	const handler = (e) => {
	// 		if (e.code === 'Escape') {
	// 			onClose();
	// 		}
	// 	};

	// 	document.addEventListener('keydown', handler);

	// 	return () => {
	// 		document.removeEventListener('keydown', handler);
	// 	};
	// }, [onClose]);

	const addHandler = () => {
		const watchedMovie = {
			imdbID: selectedId,
			title,
			year,
			poster,
			runtime,
			imdbRating: +imdbRating,
			runtime: runtime.split(' ').at(0),
			userRating,
		};
		onAddWatched(watchedMovie);
	};

	return isLoading ? (
		<Loader />
	) : (
		<div className="details">
			<header>
				<button onClick={onClose} className="btn-back">
					&#8592;
				</button>
				<img src={poster} alt={`Poster for ${title} movie`} />
				<div className="details-overview">
					<h2>{title}</h2>
					<p>
						{released} &bull; {runtime}
					</p>
					<p>{genre}</p>
					<p>
						<span>👍</span> {imdbRating} IMDB rating
					</p>
				</div>
			</header>
			<section>
				<div className="rating">
					<StarRating
						maxRating={10}
						onSetRating={setUserRating}
						defaultRating={0}
					/>
					{userRating !== '' && (
						<button className="btn-add" onClick={addHandler}>
							Add to list
						</button>
					)}
				</div>
				<p>
					<em>{plot}</em>
				</p>
				<p>Starring {actors}</p>
				<p>Directed by {director}</p>
			</section>
		</div>
	);
}

export default SelectedMovie;
