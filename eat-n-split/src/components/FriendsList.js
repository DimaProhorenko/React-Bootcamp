import React from 'react';
import Friend from './Friend';

function FriendsList({ friends }) {
	return (
		<ul>
			{friends.map((item) => (
				<Friend key={item.id} friend={item} />
			))}
		</ul>
	);
}

export default FriendsList;
