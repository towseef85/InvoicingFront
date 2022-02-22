import React from 'react';
import { Layout, Menu, Dropdown, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';



export default function header({toggle, collapsed}) {
    const { Header } = Layout;

    const Logout = () => {
      window.localStorage.removeItem('userToken');
      window.localStorage.removeItem('exec_id');
      window.localStorage.removeItem('exec-details');
      window.localStorage.removeItem("user-name");
      window.location.replace("/");
    }

    const menu = (
      <Menu>
        <Menu.Item>
          <a onClick={Logout} rel="noopener noreferrer" href="##">
            Logout
          </a>
        </Menu.Item>
      </Menu>
    );

    return (        
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
          <Dropdown overlay={menu} className="account-dropdown">
            <Button>Account</Button>
          </Dropdown>
        </Header>
         
       
    )
}