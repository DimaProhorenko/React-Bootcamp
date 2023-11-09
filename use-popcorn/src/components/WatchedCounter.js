import React from 'react';

function WatchedCounter({ value }) {
	return (
		<p>
			<span>#️⃣</span>
			<span>{value} movies</span>
		</p>
	);
}

export default WatchedCounter;
