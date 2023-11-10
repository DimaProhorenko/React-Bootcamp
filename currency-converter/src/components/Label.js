import React from 'react';

function Label({ children, className, ...restProps }) {
	return (
		<label className={`label ${className || ''}`} {...restProps}>
			{children}
		</label>
	);
}

export default Label;
