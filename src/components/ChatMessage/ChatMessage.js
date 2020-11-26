import React from 'react';
import styles from './ChatMessage.scss';
const ChatMessage = props => (
	<div className="chat-msg">
		<div className="chat-user-details">
			<img src="/images/user-image.png" className="user-image"></img>
			<label>Shirley Cook</label>
			<br />
			<span>@JohntenD</span>
		</div>
		<div className="chat-preview">
			<h6>Inquiry about relocation...</h6>
			<p>
			Vacancy ads help you attract potential hires who are.....
			</p>
			<label className="chat-time">11:00 a.m</label>
		</div>
	</div>
);


export default ChatMessage;
