import React from 'react';
import Star from './Star';
import UserRating from './UserRating';
import MovieRunTime from './MovieRunTime';

function WatchedMovie({ movie, onDeleteMovie }) {
	const deleteHandler = () => {
		onDeleteMovie(movie.imdbID);
	};

	return (
		<li key={movie.imdbID}>
			<img src={movie.poster} alt={`${movie.title} poster`} />
			<h3>{movie.title}</h3>
			<div>
				<Star value={movie.imdbRating} />
				<UserRating value={movie.userRating} />
				<MovieRunTime value={movie.runtime} />
				<button className="btn-delete" onClick={deleteHandler}>
					X
				</button>
			</div>
		</li>
	);
}

export default WatchedMovie;
