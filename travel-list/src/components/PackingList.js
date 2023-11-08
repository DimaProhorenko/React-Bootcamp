import React, { useState } from 'react';
import Item from './Item';
import Sort from './Sort';
import Button from './Button';

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
	const [sortValue, setSortValue] = useState('input');

	let sortedItems;

	if (sortValue === 'input') {
		sortedItems = items;
	} else if (sortValue === 'description') {
		sortedItems = [...items].sort((a, b) =>
			a.description.localeCompare(b.description)
		);
	} else {
		sortedItems = [...items].sort(
			(a, b) => Number(a.packed) - Number(b.packed)
		);
	}

	const onSortHandler = (e) => {
		setSortValue(e.target.value);
	};

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						key={item.id}
						item={item}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>
			<div className="actions">
				<Sort sortValue={sortValue} onSort={onSortHandler} />
				<Button onClick={onClearList}>Clear list</Button>
			</div>
		</div>
	);
}

export default PackingList;
