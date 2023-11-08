import React from 'react';

function Button({ children, className, ...restProps }) {
	return (
		<button className={`btn ${className}`} {...restProps}>
			{children}
		</button>
	);
}

export default Button;
