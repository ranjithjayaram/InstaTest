import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';

const Header = props => (
	<div className="header">
		<div className="app-title">
			<img src="/images/header_logo.png" style={{ marginRight:'20px' }}></img>
			<label>Insta</label><label style={{ color: '#FFBB00' }}>driver</label>
		</div>
		<div className="header-menu-items">
			<button className="btn-menu-header btn-white">Jobs</button>
			<button className="btn-menu-header btn-white">Get Social</button>
			<button className="btn-menu-header btn-black">James Keen</button>
		</div>
	</div>
);

export default Header;
