import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ModalContainer.css';

// Redux Actions
import { hideModal, showModal } from '../../actions/modalActions';

// Components
import ReactModal from 'react-modal';
import {default as modalTypes} from '../ModalTypes';

const mapStateToProps = state => ({
	...state.modal
})

const mapDispatchToProps = dispatch => ({
	hideModal: () => dispatch(hideModal())
})

const MODAL_TYPES = {
	'alert': modalTypes.alertModal,
	'confirm': modalTypes.confirmModal,
	'delete': modalTypes.deleteModal,
	'prompt': modalTypes.promptModal,
	'createPost': modalTypes.createPostModal
}

class ModalContainer extends Component {
	constructor(props) {
		super();
		this.state = {
			modalIsOpen: props.modalProps.open,
		}
		this.closeModal = this.closeModal.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.modalProps.open !== this.props.modalProps.open) {
			this.setState({
				modalIsOpen: nextProps.modalProps.open
			})
		}
	}

	closeModal = () => {
		this.props.hideModal()
	}

	render() {
		if(!this.props.modalType) {
			return null
		}

		const SpecifiedModal = MODAL_TYPES[this.props.modalType]

		return (
			<div>
					<ReactModal
						className="modal"
						overlayClassName='modal-overlay'
						isOpen = {this.state.modalIsOpen}
						onAfterOpen = {this.afterOpenModal}
						onRequestClose={this.closeModal}
						contentLabel = 'Modal'
						ariaHideApp = {false}
					>
						<SpecifiedModal
							closeModal = {this.closeModal}
							{...this.props.modalProps}
						/>
					</ReactModal>
			</div>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ModalContainer);
