import React from 'react';

function SearchBar({ query, setQuery }) {
	const changeHandler = (e) => {
		setQuery(e.target.value);
	};

	return (
		<input
			className="search"
			type="text"
			placeholder="Search movies..."
			value={query}
			onChange={changeHandler}
		/>
	);
}

export default SearchBar;
