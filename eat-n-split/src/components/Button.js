import React from 'react';

function Button({ children, className, ...restProps }) {
	return (
		<button className={`button ${className || ''}`} {...restProps}>
			{children}
		</button>
	);
}

export default Button;
