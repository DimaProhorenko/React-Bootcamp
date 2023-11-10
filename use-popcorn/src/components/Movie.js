import React from 'react';

function Movie({ movie, onSelectMovie, ...restProps }) {
	const selectHandler = () => {
		onSelectMovie(movie.imdbID);
	};

	return (
		<li onClick={selectHandler}>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<p>
					<span>🗓</span>
					<span>{movie.Year}</span>
				</p>
			</div>
		</li>
	);
}

export default Movie;
