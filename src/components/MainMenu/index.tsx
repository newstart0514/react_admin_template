import {Menu, MenuProps} from "antd";
import React, {useState} from "react";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate, useLocation} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

// // 简写形式
// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     } as MenuItem;
// }
// // 侧边栏的数据
// const items: MenuItem[] = [
//     getItem('栏目一', '/page1', <PieChartOutlined />),
//     getItem('栏目二', '/page2', <DesktopOutlined />),
//     getItem('User', 'page3', <UserOutlined />, [
//         getItem('Tom', '3'),
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'page4', <TeamOutlined />,
//         [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];
// 登录请求到数据之后，就可以跟items这个数组进行匹配
const items: MenuItem[] = [
    {
        label: '栏目一',
        key: '/page1',
        icon: <PieChartOutlined/>
    },
    {
        label: '栏目二',
        key: '/page2',
        icon: <DesktopOutlined/>
    },
    {
        label: '栏目三',
        key: 'page3',
        icon: <UserOutlined/>,
        children: [
            {
                label: '栏目301',
                key: '/page3/page301'
            },
            {
                label: '栏目302',
                key: '/page3/page302'
            },
            {
                label: '栏目303',
                key: '/page3/page303'
            }
        ]
    },
    {
        label: '栏目四',
        key: 'page4',
        icon: <UserOutlined/>,
        children: [
            {
                label: '栏目401',
                key: '/page4/page401'
            },
            {
                label: '栏目402',
                key: '/page4/page402'
            }
        ]
    },
    {
        label: '栏目5',
        key: '/page5',
        icon: <FileOutlined/>
    }
]

const View: React.FC = () => {
    // 编程式路由跳转的hook
    const navigateTo = useNavigate()
    // 调用当前路由的组件hook
    const currentRoute = useLocation()

    // 菜单点击事件
    const menuClick = (e:{key:string}) => {
        // 点击要跳转到对应路由  编程式导航跳转 利用一个hook
        navigateTo(e.key)
    }

    // 拿着currentRoute.pathname跟items数组的每一项的children的key值进行对比，如果相等就赋初始值为上一级的key
    // 这个key给到openkeys数组的元素，作为初始值
    let firstOpenKey:string = ""
    // 在这里进行对比  find方法
    // 定义一个查询函数
    function findKey(obj:any) {
        return obj.key === currentRoute.pathname
    }
    // 对多个children进行对比
    for (let i = 0; i < items.length; i++) {
        // items[?]['children'].find(findKey)这个结果如果找得到的话就是true，找不到就是false  items[i]! 保证items[i]存在且有值
        if(items[i]!['children'] && items[i]!['children'].length>0 && items[i]!['children'].find(findKey)) {
            firstOpenKey = items[i]!.key as string;
            break;
        }
    }

    // 设置展开项的初始值
    const [openkeys, setOpenkeys] = useState([firstOpenKey]);
    // 菜单展开收缩回调事件
    const handleOpenChange = (keys:string[]) => {
        // 展开和回收某项菜单的时候执行这里的代码
        // keys是一个数组，记录了当前哪一项是展开的（keys）
        // 把这个数组修改成最后一项
        setOpenkeys([keys[keys.length-1]])
    }

    return (
        <Menu
            theme="dark"
            // 表示当前样式所在的选中项的key
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            // 菜单项的数据
            items={items}
            onClick={menuClick}
            // 某项菜单展开或者回收的触发事件
            onOpenChange={handleOpenChange}
            // 当前菜单展开项的key数组
            openKeys={openkeys}
        />
    )
}

export default View;