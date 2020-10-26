import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { hideModal, showModal } from '../../actions/modalActions';
import './Navbar.css';

// Components
import SearchIcon from '@material-ui/icons/Search';
import ModalContainer from '../ModalContainer/ModalContainer';

// TEMP COMPONENT REMOVE ON DEPLOY
import faker from 'faker';

// Modal Dispatch 
const mapDispatchToProps = dispatch => ({
	hideModal: () => dispatch(hideModal()),
	showModal: (modalProps, modalType) => {
		dispatch(showModal({ modalProps, modalType }))
	},
	logoutUser: () => dispatch(logoutUser())
})

class Navbar extends Component {
	constructor(props) {
		super()
		this.openAlertModal = this.openAlertModal.bind(this)
		this.openCreatePostModal = this.openCreatePostModal.bind(this)
		this.closeModal = this.closeModal.bind(this)
	}

	onLogoutClick = e => {
		e.preventDefault();
		this.props.logoutUser();
	};

	closeModal = () => {
		this.props.hideModal();
	}

	openAlertModal = (event) => {
		this.props.showModal({
			open: true,
			title: 'Alert Modal',
			message: 'hi',
			closeModal: this.closeModal
		}, 'alert')
	}

	openCreatePostModal = (event) => {
		this.props.showModal({
			open: true,
			closeModal: this.closeModal,
		}, 'createPost')
	}

	render() {

		return (
			<div className="navbar__fullWidth">
				<div className="navbar">
					<div className="navbar__menu">
						<h3>Meet</h3>
						<h3>Greet</h3>
						<h3>Work</h3>
					</div>
					<div className="navbar__createPost">
						<button onClick={this.openCreatePostModal}>Create Post</button>
					</div>
					<div className="navbar__profile">
						<button onClick={this.onLogoutClick}>Logout</button>
						<h3>{faker.name.findName()}</h3>
						<img src={faker.image.avatar()} />
					</div>
				</div>
			</div>
		)
	}
	
}

Navbar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}

// Subscribe this component to the Redux auth store
const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar);
