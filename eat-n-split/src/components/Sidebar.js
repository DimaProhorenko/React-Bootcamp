import React, { useState } from 'react';
import FriendsList from './FriendsList';
import Button from './Button';
import AddFriendForm from './AddFriendForm';

function Sidebar({ friends, selectedFriend, onAddFriend, onSelectFriend }) {
	const [isFormOpen, setIsFormOpen] = useState(false);

	const toggleFormHandler = () => {
		setIsFormOpen((prevState) => !prevState);
	};

	return (
		<div className="sidebar">
			<FriendsList
				friends={friends}
				selectedFriend={selectedFriend}
				onSelectFriend={onSelectFriend}
			/>
			{isFormOpen && (
				<AddFriendForm
					onAddFriend={onAddFriend}
					onFormClose={toggleFormHandler}
				/>
			)}
			<Button onClick={toggleFormHandler}>
				{isFormOpen ? 'Close' : 'Add Friend'}
			</Button>
		</div>
	);
}

export default Sidebar;
