const initialState = {
	data: []
}

export const reducer = (state= initialState, action) => {
	switch(action.type){
		case 'LOAD_PEOPLES': 
			return {...state, data: action.payload}
		default:
			return state	
	}
}