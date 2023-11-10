import React from 'react';
import WatchedMovie from './WatchedMovie';

function WatchedList({ watched, onDeleteMovie }) {
	return (
		<ul className="list">
			{watched.map((movie) => (
				<WatchedMovie
					key={movie.imdbID}
					movie={movie}
					onDeleteMovie={onDeleteMovie}
				/>
			))}
		</ul>
	);
}

export default WatchedList;
