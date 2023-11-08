import React from 'react';
import Friend from './Friend';

function FriendsList({ friends, selectedFriend, onSelectFriend }) {
	return (
		<ul>
			{friends.map((item) => (
				<Friend
					key={item.id}
					friend={item}
					selectedFriend={selectedFriend}
					onSelectFriend={onSelectFriend}
				/>
			))}
		</ul>
	);
}

export default FriendsList;
