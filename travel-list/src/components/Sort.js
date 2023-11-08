import React from 'react';

function Sort({ sortValue, onSort }) {
	return (
		<div className="sort">
			<select value={sortValue} onChange={onSort}>
				<option value="input">Sort by input order</option>
				<option value="description">Sort by description</option>
				<option value="packed">Sort by packed</option>
			</select>
		</div>
	);
}

export default Sort;
