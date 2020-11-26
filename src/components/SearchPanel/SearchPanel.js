import React from 'react';
import styles from './SearchPanel.scss';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
const SearchPanel = props => (
	<div className="search-panel">
		<div className="search-area">
			<SearchIcon className="search-icon"></SearchIcon>
			<input type="text"></input>
			<img src="/images/search-filter.png" style={{ padding: '12px' }}></img>
		</div>
		<div className="add-new-chat">
			<button className="new-chat-btn">
				<AddIcon style={{ float: 'left' }}></AddIcon>
				<label>Start a new chat</label>
			</button>
		</div>
	</div>
);

export default SearchPanel;
