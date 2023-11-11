import React, { useRef, useEffect } from 'react';

function SearchBar({ query, setQuery, onClose }) {
	const inputEl = useRef(null);

	const changeHandler = (e) => {
		onClose();
		setQuery(e.target.value);
	};

	useEffect(() => {
		const onFocusHandler = (e) => {
			if (document.activeElement === inputEl.current) return;

			if (e.code === 'Enter') {
				inputEl.current.focus();
				setQuery('');
			}
		};

		inputEl.current.focus();
		document.addEventListener('keydown', onFocusHandler);

		return () => {
			document.removeEventListener('keydown', onFocusHandler);
		};
	}, [setQuery]);

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
