import React from 'react';
import Star from './Star';
import UserRating from './UserRating';
import MovieRunTime from './MovieRunTime';

function WatchedMovie({ movie }) {
	return (
		<li key={movie.imdbID}>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<Star value={movie.imdbRating} />
				<UserRating value={movie.userRating} />
				<MovieRunTime value={movie.runtime} />
			</div>
		</li>
	);
}

export default WatchedMovie;
