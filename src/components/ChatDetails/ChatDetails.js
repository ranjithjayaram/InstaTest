import React from 'react';
import styles from './ChatDetails.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatBubble from '../ChatBubble/ChatBubble';
const ChatDetails = props => {
	let data={text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`, time:'11:00 AM' };
	return(
	<div className="chat-details">
		<div className="chat-header">
			<div className="chat-user-preview">
				<img src="/images/user-image.png" style={{position:'absolute', marginTop:'-35px'}}></img>
				<label style={{width:'100%', marginTop:'35px'}}>Shirley Cook</label>
				<span>@JohntenD</span>
			</div>
			<div className="chat-details-header">
				<label>
				Inquiry about relocation from Nairobi 
				</label>
			</div>
			<div className="chat-contact-details">
				<button className="contact-details-btn"><img src="/images/icon-info.png" style={{verticalAlign:'bottom'}}></img>
				<label>Contact Info</label></button>
				<MoreVertIcon style={{verticalAlign:'middle'}}></MoreVertIcon>
			</div>
		</div>
		<div className="chat-text">
			<ChatBubble type={'receiver'} data={data}></ChatBubble>
			<ChatBubble type={'sender'} data={data}></ChatBubble>
			<ChatBubble type={'receiver'} data={data}></ChatBubble>
			<ChatBubble type={'sender'} data={data}></ChatBubble>
		</div>
	</div>
)
};

export default ChatDetails;
