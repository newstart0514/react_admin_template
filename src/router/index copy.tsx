// 组件形式的写法
import App from "@/App";
import Home from "@/views/Home";
import About from "@/views/About";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// 引入两种路由模式的组件：BrowserRouter(history模式),HashRouter(hash模式)

// const baseRouter = () => {
//     return()
// }
// 以上写法可以简写（语法糖）为：
const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                {/* 配置用户访问路径的时候重定向到/home路径 */}
                <Route path='/' element={<Navigate to='/home'/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter