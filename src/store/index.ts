import {combineReducers, legacy_createStore, compose, applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk'
import handleNum from "@/store/NumStatus/reducer";
import handleArr from "@/store/ArrStatus/reducer";

// 组合各个模块的reducer
const reducers = combineReducers({
    handleNum,
    handleArr
})

// 创建仓库   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()为了让浏览器正常使用redux-dev-tool插件
// const store =  legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// 判断有没有__REDUX_DEVTOOLS_EXTENSION_COMPOSE__这个模块
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose //rt
// 把仓库数据，浏览器redux-dev-tools，还有reduxThunk插件关联在store中
const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk))); //rt

export default store