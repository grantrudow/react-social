import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import './Dashboard.css'

// Components
import DashboardRight from '../DashboardRight/DashboardRight';
import DashboardLeft from '../DashboardLeft/DashboardLeft';
import DashboardCenter from '../DashboardCenter/DashboardCenter';
import Navbar from '../Navbar/Navbar';
import SocialPost from '../SocialPost/SocialPost';

class Dashboard extends Component {
	onLogoutClick = e => {
		e.preventDefault();
		this.props.logoutUser();
	};

	render() {
		const { user } = this.props.auth;

		return (
			<div className="dashboard">
				<div className="dashboard__mainGrid">
					<div className="dashboard__left">
						<DashboardLeft />
					</div>
					<div className="dashboard__center">
						<DashboardCenter>
							<SocialPost />
						</ DashboardCenter>
					</div>
					<div className="dashboard__right">
						<DashboardRight />
					</div>
				</div>
			</div>
		)
	}
}

Dashboard.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ logoutUser }
)(Dashboard);