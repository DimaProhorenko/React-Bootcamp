import React from 'react';

function UserRating({ value }) {
	return (
		<p>
			<span>🌟</span>
			<span>{value}</span>
		</p>
	);
}

export default UserRating;
