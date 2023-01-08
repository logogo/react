const defaultState = {
    newsList: '',
    addList: ''
};

export default (state = defaultState, action) => {
    switch (action.type) {
            case 'acts':
                console.log(action);
                return Object.assign(state, { newsList: '11111' });
            case 'acts1':
                return Object.assign(state, { addList: '222222' });
            default: return state;
    }
};
