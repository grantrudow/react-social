import {
	CREATE_POST
} from '../actions/types'

const initialState = {
	title: '',
	category: '',
	message: ''
}

export default function(state = initialState, action) {
	switch(action.type) {
		case CREATE_POST:
			return {
				...state,
				title: action.payload,
				category: action.payload,
				user: action.payload
			}
		default:
			return state;
	}
}