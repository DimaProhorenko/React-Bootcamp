import React from 'react';
import Button from './Button';

function Friend({ friend, selectedFriend, onSelectFriend }) {
	const { id, name, image, balance } = friend;
	const isSelected = id === selectedFriend.id;

	const selectHandler = () => {
		onSelectFriend(id);
	};

	return (
		<li className={isSelected ? 'selected' : ''}>
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
			<Button onClick={selectHandler}>
				{isSelected ? 'Close' : 'select'}
			</Button>
		</li>
	);
}

export default Friend;
