
/*
store数据统一导出，文件名字为单个store集合，
例子：const appData = useSelector(state => state.appData);
获取appData中的store数据
*/
import { combineReducers } from 'redux';
const cache = {};
const fileList = require.context('./reducer/', false, /\.js/);
fileList.keys().forEach(key => {
    const apis = fileList(key);
    key = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.js'));
    Object.keys(apis).forEach((name) => {
        if (cache[name]) {
            throw new Error(`store '${name}' conflict in '${key}'!`);
        }
        cache[key] = apis[name];
    });
});

const reducer = combineReducers({
    ...cache
});

export default reducer;
