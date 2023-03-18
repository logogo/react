const defaultState = {
    num: ''
};

export default (state = defaultState, action) =>{
    switch (action.type) {
            case 'AntdLi/acts':
                return { num: action.num };
            default: return state;
    }
};
