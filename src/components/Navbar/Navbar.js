import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { hideModal, showModal } from '../../actions/modalActions';
import './Navbar.css';

// Components
import SearchIcon from '@material-ui/icons/Search';
import ModalContainer from '../ModalContainer/ModalContainer';

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
			title: 'Create Post',
			closeModal: this.closeModal,
			fields: [{
				name: 'Title',
				placeholder: 'Post Title',
				showLabel: true
				},
				{
					name: 'Subject',
					placeholder: 'Post Subject',
					showLabel: false
				},
				{
					name: 'Message',
					placeholder: 'Enter your message here',
					showLabel: true
				}
			],
			onInputChange: this.onInputChange, 
			confirmAction: this.confirmAction
		}, 'createPost')
	}

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
					<button onClick={this.openCreatePostModal}>Create Post</button>
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

// Subscribe this component to the Redux auth store
const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar);
