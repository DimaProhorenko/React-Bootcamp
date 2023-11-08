import React from 'react';

function Item({ item, onDeleteItem, onToggleItem }) {
	const { id, description, quantity, packed } = item;

	const deleteHandler = () => {
		onDeleteItem(id);
	};

	const toggleHandler = () => {
		onToggleItem(id);
	};

	return (
		<li key={id} className={packed ? 'done' : ''}>
			<input type="checkbox" value={packed} onChange={toggleHandler} />
			<span>
				{quantity} {description}
			</span>
			<button onClick={deleteHandler}>❌</button>
		</li>
	);
}

export default Item;
