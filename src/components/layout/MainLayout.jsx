import { Layout } from 'antd';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header'
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    const [collapsed, setCollapsed] = useState(false)

  const {Content} = Layout
   
  const toggle=() =>{
    setCollapsed(!collapsed)
  }

    return (
        <Layout>
      <Sidebar collapsed={collapsed}/>
      <Layout className="site-layout" style={{
        overflow: 'auto',
        minHeight: '100vh',
      }}>
        
      <Header toggle={toggle} collapsed={collapsed}/>
      <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px 0',
              padding: '20px',
             height:'100vh' ,
              flex: '1 0 300px',
              overflow: 'auto',
            }}
          >
            <Outlet/>
          </Content>
      </Layout>
    </Layout>
    )
}