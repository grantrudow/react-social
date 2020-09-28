import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import './Navbar.css';

import SearchIcon from '@material-ui/icons/Search';

class Navbar extends Component {
	onLogoutClick = e => {
		e.preventDefault();
		this.props.logoutUser();
	};

	render() {
		return (
			<div className="navbar">
				<div className="navbar__logo">
					<h1>Meet.A.Dev.</h1>
				</div>
				<div className="navbar__center">
					<h3>Main Stream</h3>
					<div className="navbar__searchbox">
						<SearchIcon style={{ color: '#3EBDC6', fontSize: 40 }}/>
					</div>
				</div>
				<div className="navbar__createPost">
					<button>Create Post</button>
				</div>
				<div className="navbar__profile">
					<button onClick={this.onLogoutClick}>Logout</button>
					<h3>Grant Rudow</h3>
					<img src={'https://images.unsplash.com/photo-1581992652564-44c42f5ad3ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'} />
				</div>
				
			</div>
		)
	}
	
}

Navbar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ logoutUser }
)(Navbar);
