import React from 'react';

function SplitBillForm({ friend }) {
	return (
		<form className="form-split-bill">
			<h2>Split the bill with {friend.name}</h2>
			<label htmlFor="split-bill-value">Bill value</label>
			<input id="split-bill-value" type="text" />

			<label htmlFor="split-your-expance">Your expance</label>
			<input id="split-your-expance" type="text" />

			<label htmlFor="split-friend-expance">
				{friend.name}'s expance
			</label>
			<input id="split-friend-expance" type="text" />

			<label htmlFor="split-who-pays">Who's paying?</label>
			<select id="split-who-pays">
				<option value="user">You</option>
				<option value="friend">{friend.name}</option>
			</select>
		</form>
	);
}

export default SplitBillForm;
