import React from 'react';
import { average } from '../helpers';
import Star from './Star';
import UserRating from './UserRating';
import MovieRunTime from './MovieRunTime';
import WatchedCounter from './WatchedCounter';

function WatchedSummary({ watched }) {
	const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
	const avgUserRating = average(watched.map((movie) => movie.userRating));
	const avgRuntime = average(watched.map((movie) => movie.runtime));

	return (
		<div className="summary">
			<h2>Movies you watched</h2>
			<div>
				<WatchedCounter value={watched.length} />
				<Star value={avgImdbRating.toFixed(1)} />
				<UserRating value={avgUserRating.toFixed(1)} />
				<MovieRunTime value={avgRuntime.toFixed(1)} />
			</div>
		</div>
	);
}

export default WatchedSummary;
