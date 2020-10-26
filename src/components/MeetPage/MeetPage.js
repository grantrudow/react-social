import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './MeetPage.css';

// Redux Actions
import { logoutUser } from '../../actions/authActions';

// Components
import SidebarFilter from '../SidebarFilter/SidebarFilter';
import ProfileList from '../ProfileList/ProfileList';

class MeetPage extends Component {
	render() {
		return (
			<div className="meetPage">
				<div className="meetPage__title">
					<h1>Meet Others</h1>
				</div>
				<div className="meetPage__filter">
					<SidebarFilter />
				</div>
				<div className="meetPage__list">
					<ProfileList />
				</div>
			</div>
		)
	}
}

export default MeetPage;