import React, { useRef, useEffect } from 'react';
import { useKey } from '../useKey';

function SearchBar({ query, setQuery, onClose }) {
	const inputEl = useRef(null);

	const changeHandler = (e) => {
		onClose();
		setQuery(e.target.value);
	};

	useKey('Enter', () => {
		if (document.activeElement === inputEl.current) return;
		inputEl.current.focus();
		setQuery('');
		onClose();
	});

	useEffect(() => {
		inputEl.current.focus();
	}, []);

	return (
		<input
			ref={inputEl}
			className="search"
			type="text"
			placeholder="Search movies..."
			value={query}
			onChange={changeHandler}
		/>
	);
}

export default SearchBar;
