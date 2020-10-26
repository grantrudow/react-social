import React, { Component } from "react";
import "./ModalCSS/CreatePostModal.css";

import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';
import { withRouter } from "react-router-dom";
import { hideModal } from '../../actions/modalActions';

const mapDispatchToProps = dispatch => ({
	hideModal: () => dispatch(hideModal()),
	createPost: () => dispatch(createPost())
})

class CreatePostModal extends Component {
	constructor(props) {
		super();
		this.state = {
			title: '',
			category: '',
			message: ''
		}
		this.closeModal = this.closeModal.bind(this)
	}

	componentDidMount() {
		// If not logged in it won't let user click on post
		if (!this.props.auth.isAuthenticated) {
			console.log('NO YOU ARE NOT LOGGED IN')

			// TODO: MAKE CREATE POST BUTTON NOT WORK IF NOT LOGGED IN
		}
	}

	// Set state when the input values change 
	onChange = e => {
		this.setState({[e.target.id] : e.target.value})
	}

	// Close modal function linked to hideModal dispatch
	closeModal = () => {
		this.props.hideModal();
	}


	// TODO: REPLACE WITH LOADING FUNCTION
	timeoutCloseModal = () => {
		setTimeout(() => this.props.hideModal(), 2000)
	}

	onSubmit = e => {
		// Prevent page reload
		e.preventDefault();
		
		// set postData object
		const postData = {
			title: this.state.title,
			category: this.state.category,
			message: this.state.message
		}

		// Use createPost action on the postData
		this.props.createPost(postData);
		
		// Hard coded timeout function (2 seconds)
		this.timeoutCloseModal();
		
	};

	render() {
		return (
			<div className="modal-content">
				<div className="modal-body">
					<form onSubmit={this.onSubmit} noValidate autoComplete="off">
						<label className="createPost__label" htmlFor="post-title">
							Title
						</label>
						<input
							className="createPost__input"
							type="text"
							id="title"
							placeholder="Title"
							onChange={this.onChange}
							value={this.state.title}
						/>
	
						<label className="createPost__label" htmlFor="post-category">
							Category
						</label>
						<input
							className="createPost__input"
							type="text"
							id="category"
							placeholder="Category"
							onChange={this.onChange}
							value={this.state.category}
						/>
	
						<label className="createPost__label" htmlFor="post-message">
							Message
						</label>
						<textarea
							className="createPost__input"
							id="message"
							placeholder="Message"
							onChange={this.onChange}
							value={this.state.message}
						/>
	
						<div className="modal__buttons">
							<button
								id="createPost__delete"
								className="createPost__button"
								onClick={this.closeModal}
							>
								Discard
							</button>
							<button
								type="submit"
								id="createPost__submit"
								className="createPost__button"
							>
								Send Post
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
    
};

const mapStateToProps = state => ({
	auth: state.auth,
	closeModal: state.closeModal
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreatePostModal);
