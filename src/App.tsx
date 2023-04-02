import {useEffect, useState} from 'react'
// 按需引入组件，减少不必要的内存消耗
import { Button } from 'antd';
// 按需引入图标库
import { UpCircleTwoTone } from '@ant-design/icons'
import {useRoutes, useLocation, useNavigate} from 'react-router-dom'
import router from "@/router";
// import { Outlet, Link } from 'react-router-dom'
// 引入antd的样式，5.x版本不用引入
// import 'antd/dist/antd.css'

/*
    后台管理系统的两种经典的跳转情况：
    1.如果访问的是登录页面，并且有token，跳转到首页
    2.如果访问的不是登录页面，并且没有token，跳转到登录页
    3.其余的都可以正常放行
 */
function ToPage1() {
    const navigate = useNavigate()
    // 加载完这个组件之后实现跳转
    useEffect(() => {
        // 加载完组件后执行这里的代码
        navigate('/page1')
    },[])
    return <div></div>
}
function ToLogin() {
    const navigate = useNavigate()
    // 加载完这个组件之后实现跳转
    useEffect(() => {
        // 加载完组件后执行这里的代码
        navigate('/login')
    },[])
    return <div></div>
}
function BeforeRouterEnter() {
    const view = useRoutes(router)
    const Location = useLocation()
    let token = localStorage.getItem('youli-token')
    // 如果访问的是登录页面，并且有token，跳转到首页
    if (Location.pathname === '/login' && token) {
        // 这里不能使用useNavigate来实现跳转，因为需要BeforeRouterEnter是一个正常的jsx组件
        return <ToPage1/>
    }
    // 如果访问的不是登录页面，并且没有token，跳转到登录页
    if(Location.pathname !== '/login' && !token) {
        // 这里不能使用useNavigate来实现跳转，因为需要BeforeRouterEnter是一个正常的jsx组件
        return <ToLogin/>
    }
    return view
}

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            {/*顶级组件*/}
            {/*<Button type="primary">你好</Button>*/}
            {/*<UpCircleTwoTone />*/}
            {/*<Link to='/home'>Home</Link>*/}
            {/*<Link to='/about'>About</Link>*/}
            {/*<Link to='/user'>User</Link>*/}
            {/*占位符，类似于窗口，用来展示组件，可以理解为vue的router-view*/}
            {/*<Outlet/>*/}
            {/*{view}*/}
            <BeforeRouterEnter/>
        </div>
    )
}

export default App
