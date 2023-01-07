import { combineReducers } from 'redux';
import appData from './App/reducer/reducer.js';
import AntdLiData from './AntdLi/reducer/reducer.js';
const finalReducer = combineReducers({
    appData,
    AntdLiData
});

export default finalReducer;
