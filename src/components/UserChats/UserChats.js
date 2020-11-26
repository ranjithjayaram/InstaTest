import React from 'react';
import styles from './UserChats.scss';
import ChatList from '../ChatList/ChatList';
import ChatDetails from '../ChatDetails/ChatDetails';
const UserChats = props => (
	<div className="user-chat-screen">
		<ChatList></ChatList>
		<ChatDetails></ChatDetails>
	</div>
);

export default UserChats;
