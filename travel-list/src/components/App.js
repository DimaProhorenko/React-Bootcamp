import React, { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

function App() {
	const [items, setItems] = useState([]);

	const deleteItemHandler = (id) => {
		setItems((items) => items.filter((item) => item.id !== id));
	};

	const toggleItemHandler = (id) => {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	};

	return (
		<main className="app">
			<Logo />
			<Form onAddItems={setItems} />
			<PackingList
				items={items}
				onDeleteItem={deleteItemHandler}
				onToggleItem={toggleItemHandler}
			/>
			<Stats items={items} />
		</main>
	);
}

export default App;
