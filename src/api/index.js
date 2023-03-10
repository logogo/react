/*
接口统一导出，接口使用方式api.文件名.接口名
*/
const cache = {};
const fileList = require.context('./list/', false, /\.js/);
fileList.keys().forEach(key=>{
    const apis = fileList(key);
    key = key.substring(key.lastIndexOf('/')+1,key.lastIndexOf('.js'));
    Object.keys(apis).forEach((name) => {
        if (cache[name]) {
            throw new Error(`Api '${name}' conflict in '${key}'!`);
        }
        cache[key] = apis[name];
    });
})
export default cache;
