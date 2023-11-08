import React from 'react';
import Button from './Button';

function Friend({ friend }) {
	const { id, name, image, balance } = friend;
	return (
		<li>
			<img src={image} alt={name} />
			<div>
				<h3>{name}</h3>
				{balance > 0 ? (
					<p className="green">
						{name} owes you ${balance}
					</p>
				) : balance < 0 ? (
					<p className="red">
						You owe {name} ${Math.abs(balance)}
					</p>
				) : (
					<p>You are even</p>
				)}
			</div>
			<Button>Select</Button>
		</li>
	);
}

export default Friend;
