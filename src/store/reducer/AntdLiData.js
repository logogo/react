const defaultState = {
    num: ''
}

export default (state = defaultState, action) =>{
    switch(action.type){
        case 'AntdLi/acts':
            console.log(4444444444);
            return {num: action.num}
        default: return state
    }
}

