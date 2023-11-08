import React, { useState } from 'react';
import Sidebar from './Sidebar';
import SplitBillForm from './SplitBillForm';
import Storage from '../Storage';

function App() {
	const [friends, setFriends] = useState(Storage.getArrayItem('friends'));

	const addFriendHandler = (friendObj) => {
		setFriends((prevState) => {
			const updatedFriends = [...prevState, friendObj];
			Storage.setArrayItem('friends', updatedFriends);
			return updatedFriends;
		});
	};

	return (
		<main className="app">
			<Sidebar friends={friends} onAddFriend={addFriendHandler} />
			<SplitBillForm />
		</main>
	);
}

export default App;
