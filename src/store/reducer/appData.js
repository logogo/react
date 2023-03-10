const defaultState = {
    newsList: '111111111111',
    addList: ''
};

export default (state = defaultState, action) => {
    switch (action.type) {
            case 'appData/acts':
                console.log(22222222222);
                return Object.assign(state, { newsList: '11111' });
            case 'appData/acts1':
                return Object.assign(state, { addList: '222222' });
            default: return state;
    }
};
