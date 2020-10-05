import React from 'react';
import './ModalCSS/CreatePostModal.css';

// MaterialUI Components
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

// Material UI Icons
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
}));

const CreatePostModal = ({ closeModal, confirmAction, title,
	fields, onInputChange, showLabel }) => {

	const classes = useStyles();

	const onTitleChange = (event) => {
		console.log(event.target.value)
	}

	const onSubjectChange = (event) => {
		console.log(event.target.value)
	}

	const onMessageChange = (event) => {
		console.log(event.target.value)
	}

	return (
	  <div className="modal-content">
		<div className="modal-header">
		  	<h5 className="modal-title">
			  {title}
			</h5>
			<IconButton aria-label="delete" onClick={closeModal} >
				<DeleteIcon />
			</IconButton >
		</div>
		<div className="modal-body">
		  <form className={classes.root} noValidate autoComplete="off">
			<TextField 
				id="outlined-basic" 
				label="Post Title" 
				variant="outlined" 
				onChange={onTitleChange} 
			/>
			<TextField 
				id="outlined-basic" 
				label="Post Subject" 
				variant="outlined" 
				onChange={onSubjectChange} 
			/>
			<TextField
          		id="standard-multiline-flexible"
				label="Multiline"
				multiline
				rowsMax={4}
				// value={value}
				onChange={onMessageChange}
				variant="outlined"
  			/>
			<Button variant="contained" color="primary">
				Send Post
			</Button>
		  </form>
		</div>
	  </div>
	)
  }
  
  export default CreatePostModal