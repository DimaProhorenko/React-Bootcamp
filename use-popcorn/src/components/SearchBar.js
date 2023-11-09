import React, { useState } from 'react';

function SearchBar() {
	const [query, setQuery] = useState('');

	const changeHandler = (e) => {
		setQuery(e.target.value);
	};

	return (
		<input
			className="search"
			type="text"
			placeholder="Search movies..."
			value={query}
			onChange={(e) => changeHandler}
		/>
	);
}

export default SearchBar;
