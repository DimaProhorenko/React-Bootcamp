import React from 'react';

function Card({ className, children }) {
	return <div className={`card ${className || ''}`}>{children}</div>;
}

export default Card;
