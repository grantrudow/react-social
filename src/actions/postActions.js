import axios from 'axios';

import {
	CREATE_POST
} from './types';

// Dispatch New Post to Server using postData
export const createPost = (postData) => dispatch => {
	axios
		.post('/api/posts/create', postData)
		.then(res => {
			console.log(res)
		})
}