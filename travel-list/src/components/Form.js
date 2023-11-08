import React, { useState } from 'react';

function Form({ onAddItems }) {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	const resetInputs = () => {
		setDescription('');
		setQuantity(1);
	};

	const addItem = (item) => {
		onAddItems((items) => [...items, item]);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const newItem = {
			id: Date.now(),
			description,
			quantity,
			packed: false,
		};

		addItem(newItem);
		resetInputs();
	};

	return (
		<form className="add-form" onSubmit={submitHandler}>
			<h3>What do you need for your 😍 trip</h3>
			<select
				name="quantity"
				value={quantity}
				onChange={(e) => setQuantity(+e.target.value)}
			>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((el) => (
					<option value={el} key={el}>
						{el}
					</option>
				))}
			</select>
			<input
				type="text"
				required
				name="Item text"
				placeholder="Item..."
				value={description}
				onChange={(e) => {
					setDescription(e.target.value);
				}}
			/>
			<button>Add item</button>
		</form>
	);
}

export default Form;
