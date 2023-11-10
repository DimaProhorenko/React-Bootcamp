import React, { useEffect, useState } from 'react';
import { searchMovieById } from '../fetchHelpers';
import StarRating from './StarRating';

function SelectedMovie({ selectedId, onClose }) {
	const [movie, setMovie] = useState({});

	const {
		Title: title,
		Year: year,
		Poster: poster,
		Runtime: runtime,
		imdbRating,
		Plot: plot,
		Released: released,
		Actors: actors,
		Director: director,
		Genre: genre,
	} = movie;

	useEffect(() => {
		const getData = async () => {
			const data = await searchMovieById(selectedId);
			setMovie(data);
		};

		getData();
	}, [selectedId]);
	return (
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
					<StarRating maxRating={10} />
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
