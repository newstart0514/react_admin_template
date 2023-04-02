import React, { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import {Outlet} from "react-router-dom";
import MainMenu from "@/components/MainMenu";

const { Header, Content, Footer, Sider } = Layout;

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 左边侧边栏 */}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                {/* 侧边栏选项遍历 */}
                <MainMenu/>
            </Sider>
            <Layout className="site-layout">
                {/* 右边头部 */}
                <Header style={{ paddingLeft:'16px', background: colorBgContainer }}>
                    {/* 面包屑 */}
                    <Breadcrumb style={{ lineHeight:'64px' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                {/* 右边内容 */}
                <Content style={{ margin: '16px 16px 0' }}>
                    {/*  窗口内容  */}
                    <Outlet/>
                </Content>
                <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '48px' }}>management ©2023 Created by youli</Footer>
            </Layout>
        </Layout>
    );
};

export default View;