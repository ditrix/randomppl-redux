import redux from 'redux'
import axios from 'axios'

export const actionLoadDataSuccess = (data) => {
	console.log('actionLoadDataSuccess')
	return {
		type: 'LOAD_SUCCESS',
		payload: data,
	}
}

export const actionLoadData = () => {
	console.log('actionLoadData')
	return { type: 'LOADED_REQUEST'}
}


export const actionLoadDataError = () => {
	console.log('actionLoadDataError')
	return { type: 'LOADED_ERROR'}
}

// no thunk - no return dispatch
export const loadData = (dispatch) => {
	console.log('loadData()')
	 dispatch(actionLoadData())
  	 return axios('https://api.randomuser.me/?results=5')
       .then(response => dispatch(actionLoadDataSuccess(response.data.results)))
       .catch(error => dispatch(actionLoadDataError()))	 
	  	
 
  
}

