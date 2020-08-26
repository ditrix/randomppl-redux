const initialState = {
	data: [],
	loading: false,
	error: false,
}

export const reducer = (state= initialState, action) => {
	switch(action.type){
		case 'LOAD_SUCCESS': 
			return {data: action.payload, loading: false, error: false}
		case 'LOADED_REQUEST':
			return {data:[],loading: true, error: false}
			
		case 'LOADED_ERROR':
			return {data:[],loading: false, error: true}
		default:
			return state	
	}
}

