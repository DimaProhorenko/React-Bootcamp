import React from 'react';

function Stats({ items }) {
	if (items.length === 0) {
		return <p className="stats">Start packing your things 🩳🩱</p>;
	}
	const totalItems = items.length;
	const totalPackedItems = items.filter(
		(item) => item.packed === true
	).length;
	const percentage = (totalPackedItems / totalItems) * 100;
	return (
		<footer className="stats">
			{totalItems === totalPackedItems ? (
				<em>You got everything! Ready to go 🎈</em>
			) : (
				<em>
					You have {totalItems} {totalItems > 1 ? 'items' : 'item'} on
					your list, and you already packed {totalPackedItems} ({' '}
					{percentage.toFixed(2)}%) 👜
				</em>
			)}
		</footer>
	);
}

export default Stats;
