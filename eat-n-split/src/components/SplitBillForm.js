import React, { useState } from 'react';
import Button from './Button';

function SplitBillForm({ friend, onSplit }) {
	const [bill, setBill] = useState('');
	const [paidByUser, setPaidByUser] = useState('');
	const [whoPays, setWhoPays] = useState('user');
	const paidByFriend = bill ? bill - paidByUser : '';

	const billChangeHandler = (e) => {
		setBill(e.target.value);
	};
	const paidByUserChangeHandler = (e) => {
		setPaidByUser(e.target.value);
	};

	const whoPaysChangeHandler = (e) => {
		setWhoPays(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		onSplit(whoPays === 'user' ? paidByFriend : paidByUser * -1);
		setBill('');
		setPaidByUser('');
		setWhoPays('user');
	};

	return (
		<form className="form-split-bill" onSubmit={submitHandler}>
			<h2>Split the bill with {friend.name}</h2>
			<label htmlFor="split-bill-value">Bill value</label>
			<input
				id="split-bill-value"
				type="text"
				value={bill}
				onChange={billChangeHandler}
			/>

			<label htmlFor="split-your-expance">Your expance</label>
			<input
				id="split-your-expance"
				type="text"
				value={paidByUser}
				onChange={paidByUserChangeHandler}
			/>

			<label htmlFor="split-friend-expance">
				{friend.name}'s expance
			</label>
			<input
				id="split-friend-expance"
				type="text"
				value={paidByFriend}
				readOnly
				disabled
			/>

			<label htmlFor="split-who-pays">Who's paying?</label>
			<select
				id="split-who-pays"
				value={whoPays}
				onChange={whoPaysChangeHandler}
			>
				<option value="user">You</option>
				<option value="friend">{friend.name}</option>
			</select>
			<Button>Split Bill</Button>
		</form>
	);
}

export default SplitBillForm;
