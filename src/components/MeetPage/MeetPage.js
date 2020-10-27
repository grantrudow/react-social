import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './MeetPage.css';

// Redux Actions
import { logoutUser } from '../../actions/authActions';

// Components

import ProfileList from '../ProfileList/ProfileList';

class MeetPage extends Component {
	constructor(props) {
		super()
		this.state = {
			users: []
		}
	}

	componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ users: users })); 
	}
	

	render() {
		return (
			<div className="meetPage">
				<div className="meetPage__title">
					<h1>Meet Others</h1>
				</div>

				<div className="meetPage__list">
					<ProfileList users={this.state.users} />
				</div>
			</div>
		)
	}
}

export default MeetPage;