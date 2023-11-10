import React from 'react';

function SelectButton({ children, ...restProps }) {
	return (
		<button className="select-btn" {...restProps}>
			{children}
		</button>
	);
}

export default SelectButton;
