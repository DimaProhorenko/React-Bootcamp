import React from 'react';
import { Button } from './';

function Option({ text, className, ...restProps }) {
	return (
		<Button className={`btn-option ${className || ''}`} {...restProps}>
			{text}
		</Button>
	);
}

export default Option;
