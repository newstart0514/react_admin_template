import React from 'react'
import ReactDOM from 'react-dom/client'
// 正确的引入顺序
// 样式初始化一般放在最前面
import 'reset-css'
// UI框架的样式

// 全局样式
import '@/assets/styles/global.scss'
// 组件的样式
import App from './App'
import {BrowserRouter} from "react-router-dom";
// 路由组件（组件形式的写法）
// import Router from "@/router";

// 状态管理
import {Provider} from 'react-redux'
// 引入仓库
import store from "@/store";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)
