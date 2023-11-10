import React, { useState } from 'react';

function Input({ className, ...restProps }) {
	const [value, setValue] = useState('');

	const changeHandler = (e) => {
		setValue(e.target.value);
	};

	return (
		<input
			className={`input ${className || ''}`}
			{...restProps}
			value={value}
			onChange={changeHandler}
		/>
	);
}

export default Input;
