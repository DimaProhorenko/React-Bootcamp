import React, { useState } from 'react';
import FriendsList from './FriendsList';
import Button from './Button';
import AddFriendForm from './AddFriendForm';

function Sidebar({ friends, onAddFriend }) {
	const [isFormOpen, setIsFormOpen] = useState(false);

	const toggleFormHandler = () => {
		setIsFormOpen((prevState) => !prevState);
	};

	const initialFriends = [
		{
			id: 118836,
			name: 'Clark',
			image: 'https://i.pravatar.cc/48?u=118836',
			balance: -7,
		},
		{
			id: 933372,
			name: 'Sarah',
			image: 'https://i.pravatar.cc/48?u=933372',
			balance: 20,
		},
		{
			id: 499476,
			name: 'Anthony',
			image: 'https://i.pravatar.cc/48?u=499476',
			balance: 0,
		},
	];
	return (
		<div className="sidebar">
			<FriendsList friends={friends} />
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
