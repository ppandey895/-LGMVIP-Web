import React from 'react';

function UserCard({ user }) {
	const username = `${user.first_name} ${user.last_name}`;
	return (
		<div className="user-card">
			<img src={user.avatar} alt="" />
			<span>{ user.email }</span>
			<h2>{ username }</h2>
		</div>
	)
}

export default UserCard;