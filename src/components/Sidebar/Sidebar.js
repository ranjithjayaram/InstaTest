import React from 'react';
import styles from './Sidebar.scss';

const Sidebar = props => (
	<div className="sidebar">
		<ul style={{listStyleType:'none', padding:'40px 0px 20px 15px'}}>
			<li>
				<img src="/images/user-profile.png"></img>
				<label>Employer Profile</label>
			</li>
			<li>
				<img src="/images/onboard-car.png"></img>
				<label>Onboard Your Vehicles</label>
			</li>
			<li>
				<img src="/images/sidebar-search.png"></img>
				<label>Search & Hire Drivers</label>
			</li>
			<li>
				<img src="/images/sidebar-mail.jpg"></img>
				<label>Inbox</label>
			</li>
			<li>
				<img src="/images/sidebar-recruitment.png"></img>
				<label>Recruitment </label>
			</li>
			<li>
				<img src="/images/sidebar-organisation.png"></img>
				<label>My Organisations</label>
			</li>
			<li>
				<img src="/images/sidebar-rate-driver.png"></img>
				<label>Rate A Driver</label>
			</li>
			<li>
				<img src="/images/sidebar-my-subscription.png"></img>
				<label>My Subscription</label>
			</li>
		</ul>
	</div>
);
export default Sidebar;
