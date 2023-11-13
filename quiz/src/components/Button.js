import React from 'react';

function Button({ className, children, ...restProps }) {
	return (
		<button className={`btn ${className || ''}`} {...restProps}>
			{children}
		</button>
	);
}

export default Button;
