import React, { useEffect, useState } from 'react';

function Input({ className, defaultValue, onChangeHandler, ...restProps }) {
	const [value, setValue] = useState(defaultValue);

	useEffect(() => {
		setValue(Math.round(defaultValue));
	}, [value, defaultValue]);

	const changeHandler = (e) => {
		onChangeHandler(+e.target.value);
		setValue(+e.target.value);
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
