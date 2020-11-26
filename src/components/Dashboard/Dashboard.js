import React from 'react';
import styles from './Dashboard.scss';
import SearchPanel from '../SearchPanel/SearchPanel';
import UserChats from '../UserChats/UserChats';
const Dashboard = props => (
	<div className="dashboard">
		<SearchPanel></SearchPanel>
		<UserChats></UserChats>
	</div>
);
export default Dashboard;
