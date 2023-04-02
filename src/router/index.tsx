// 引入重定向组件
import {Navigate} from "react-router-dom";
import React, {lazy} from "react";

// 引入页面
import Home from "@/views/Home";
// import About from "@/views/About";
// import User from "@/views/User";
// 懒加载引入页面
// const Home = lazy(()=>import('@/views/Home'))
// const About = lazy(()=>import('@/views/About'))
// const User = lazy(()=>import('@/views/User'))
const Page1 = lazy(()=>import('@/views/Page1'))
const Page2 = lazy(()=>import('@/views/Page2'))
const Page301 = lazy(()=>import('@/views/page301'))
const Login = lazy(()=>import('@/views/Login'))

// 懒加载模式需要我们添加一个loading组件
const withLoading = (ele:JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {ele}
    </React.Suspense>
)

// 路由配置
const routes = [
    // 嵌套路由
    {
        path: '/',
        element: <Navigate to='/page1'/>
    },
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path: '/page1',
                element: withLoading(<Page1/>)
            },
            {
                path: '/page2',
                element: withLoading(<Page2/>)
            },
            {
                path: '/page3/page301',
                element: withLoading(<Page301/>)
            }
        ]
    },
    {
        path: '/login',
        element: withLoading(<Login/>)
    },
    // 当访问不存在的目录的时候，返回到page1
    {
        path: '*',
        element: <Navigate to='/page1'/>
    }
    // {
    //     path: '/home',
    //     element: withLoading(<Home/>)
    // },
    // {
    //     path: '/about',
    //     element: withLoading(<About/>)
    // },
    // {
    //     path: '/user',
    //     element: withLoading(<User/>)
    // },
]

// 对外暴露路由
export default routes