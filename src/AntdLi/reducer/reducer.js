const defaultState = {
    num: ''
}

export default (state = defaultState, action) =>{
    switch(action.type){
        case 'acts': 
            return {num: 33333}
        default: return state
    }
}