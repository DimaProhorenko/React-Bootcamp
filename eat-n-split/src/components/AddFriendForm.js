import React, { useState } from 'react';
import Button from './Button';

function AddFriendForm({ onAddFriend, onFormClose }) {
	const [nameValue, setNameValue] = useState('');
	const [imgValue, setImgValue] = useState('');

	const nameChangeHandler = (e) => {
		setNameValue(e.target.value);
	};

	const imgChangeHandler = (e) => {
		setImgValue(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const friend = {
			id: Date.now(),
			name: nameValue,
			image: imgValue,
			balance: 0,
		};
		setNameValue('');
		setImgValue('');
		onAddFriend(friend);
		onFormClose();
	};

	return (
		<form className="form-add-friend" onSubmit={submitHandler}>
			<label htmlFor="add-name">Friend's name</label>
			<input
				id="add-name"
				type="text"
				placeholder="Enter name"
				value={nameValue}
				onChange={nameChangeHandler}
			/>
			<label htmlFor="add-image">Image url</label>
			<input
				id="add-image"
				type="text"
				placeholder="Enter url"
				value={imgValue}
				onChange={imgChangeHandler}
			/>
			<Button>Add</Button>
		</form>
	);
}

export default AddFriendForm;
