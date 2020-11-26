import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChatBubble.scss';

const ChatBubble = props => {
	console.log(props);
	return (
		<div>
			{
				props.type == 'sender' && (
					<div>
						<div className='sender bubble'>
							{props.data.text}
						</div>
						<div className="time-bubble-sender">
							<label>{props.data.time}</label>
						</div>
					</div>
				)
			}
			{
				props.type == 'receiver' && (
					<div>
					<div className='receiver bubble'>
						{props.data.text}
					</div>
					<div className="time-bubble-receiver">
							<label>{props.data.time}</label>
						</div>
					</div>
				)
			}

		</div>
	)
}

export default ChatBubble;
