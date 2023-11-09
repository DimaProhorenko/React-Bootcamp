import React from 'react';

function SearchCounter({ movies }) {
	return (
		<p className="num-results">
			Found <strong>{movies.length}</strong> results
		</p>
	);
}

export default SearchCounter;
