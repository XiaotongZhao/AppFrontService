import React, { useState } from 'react';
import './index.css';
import { Layout, Menu } from 'antd';
import { Outlet, Link } from "react-router-dom";


const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo" />
        {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} /> */}
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item>
            <Link to='/home'>Home</Link>
          </Menu.Item>
          <Menu.SubMenu title="Sub">
            <Menu.Item>
              <Link to='/test'>Test</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;