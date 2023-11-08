import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import SplitBillForm from './SplitBillForm';
import Storage from '../Storage';

function App() {
	const [friends, setFriends] = useState(Storage.getArrayItem('friends'));
	const [selectedFriend, setSelectedFriend] = useState({});

	// useEffect(() => {

	// })

	useEffect(() => {
		Storage.setArrayItem('friends', friends);
	}, [friends]);

	const addFriendHandler = (friendObj) => {
		setFriends((prevState) => {
			const updatedFriends = [...prevState, friendObj];
			Storage.setArrayItem('friends', updatedFriends);
			return updatedFriends;
		});
	};

	const selectFriendHandler = (id) => {
		if (id === selectedFriend.id) {
			setSelectedFriend({});
		} else {
			const friend = friends.find((el) => el.id === id);
			if (friend) {
				setSelectedFriend(friend);
			}
		}
	};

	const splitBillHandler = (amount) => {
		console.log(amount);
		setFriends((prevState) =>
			prevState.map((el) =>
				el.id === selectedFriend.id
					? { ...el, balance: el.balance + amount }
					: el
			)
		);
	};

	return (
		<main className="app">
			<Sidebar
				friends={friends}
				selectedFriend={selectedFriend}
				onAddFriend={addFriendHandler}
				onSelectFriend={selectFriendHandler}
			/>
			{Object.keys(selectedFriend).length > 0 && (
				<SplitBillForm
					friend={selectedFriend}
					onSplit={splitBillHandler}
				/>
			)}
		</main>
	);
}

export default App;
