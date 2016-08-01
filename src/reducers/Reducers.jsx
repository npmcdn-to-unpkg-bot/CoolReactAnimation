import {combineReducers}from 'redux';
let initConfig = {
    language: ''//语言默认中文 zh_CN
}
var config = function (state = initConfig, action) {
    var result = Object.assign({}, state);
    return result;
}
const appreducer = combineReducers({
    config
});
export default appreducer;