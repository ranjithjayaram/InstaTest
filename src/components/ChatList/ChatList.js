import React from 'react';
import styles from './ChatList.scss';
import ChatMessage from '../ChatMessage/ChatMessage';
const ChatList = props => (
	<div className="chat-list">
		<ChatMessage></ChatMessage>	
		<ChatMessage></ChatMessage>
		<ChatMessage></ChatMessage>
		<ChatMessage></ChatMessage>
		<ChatMessage></ChatMessage>
	</div>
);

export default ChatList;
