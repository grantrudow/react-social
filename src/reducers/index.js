import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import modalReducer from './modalReducer';
import postReducer from './postReducer';

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	modal: modalReducer,
	posts: postReducer
})