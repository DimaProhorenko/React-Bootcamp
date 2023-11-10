import React from 'react';

function SelectedMovie({ movie, onClose }) {
	console.log(movie);
	return (
		<div className="details">
			<button onClick={onClose} className="btn-back">
				&#8592;
			</button>
			{movie.imdbID}
		</div>
	);
}

export default SelectedMovie;
