import React from 'react';

function MovieRunTime({ value }) {
	return (
		<p>
			<span>⏳</span>
			<span>{value} min</span>
		</p>
	);
}

export default MovieRunTime;
