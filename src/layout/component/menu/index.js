import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Tree from '@/assets/img/tree.jpg';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label
    };
}
const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5')
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />)
];
const App = () => {
    console.log(11111111);
    console.log(22222222);
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout
            style={{
                minHeight: '100vh'
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className='logo'>
                    <img
                        src={Tree}
                        style={{
                            height: '59px',
                            marginLeft: '15px'
                        }}
                    />
                </div>
                <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' items={items} />
            </Sider>
            <Layout className='site-layout'>
                <Header
                    className='site-layout-background'
                    style={{
                        padding: 0
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px'
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0'
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className='site-layout-background'
                        style={{
                            padding: 24,
                            height: 'calc(100vh - 189px)',
                            background: '#fff',
                            overflowY: 'auto'
                        }}
                    >
                        <Outlet></Outlet>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center'
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;
