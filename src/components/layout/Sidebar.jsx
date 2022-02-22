import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  BarChartOutlined,
  AuditOutlined,
  ToolOutlined,
  CopyOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  ContainerOutlined,
  DiffOutlined,
  EnvironmentOutlined,
  GlobalOutlined
} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import { NavLink } from 'react-router-dom';




export default function Sidebar({ collapsed }) {
  const { Sider } = Layout;

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} width="250">
      <div className="logo">
          Inventory App
          </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
        <Menu.Item key="/" icon={<BarChartOutlined />}>
          <NavLink activeStyle={{color: "#ffffff"}} to='/home'>Dashboard</NavLink>
        </Menu.Item> 
        <Menu.Item key="/customer" icon={<UserOutlined />}>
          <NavLink activeStyle={{color: "#ffffff"}} to='/customers'>Customers</NavLink>
        </Menu.Item>
        <SubMenu key="/sales" icon={<AuditOutlined />} title="Sales">
       
        <Menu.Item key="/invoice" icon={<AuditOutlined />}>
          <NavLink activeStyle={{color: "#ffffff"}} to='/invoice'>Invoice</NavLink>
        </Menu.Item>
        </SubMenu>
        <SubMenu key="/inventory" icon={<ToolOutlined />} title="inventory">

        <Menu.Item key="/inventorylist" icon={<ToolOutlined />}>
          <NavLink activeStyle={{color: "#ffffff"}} to='/inventory'>Inventory List</NavLink>
        </Menu.Item>
        <Menu.Item key="/additems" icon={<CopyOutlined />}>
          <NavLink activeStyle={{color: "#ffffff"}} to='/addinventory'>Add Items</NavLink>
        </Menu.Item>
        </SubMenu>
      
        <SubMenu key="/settings" icon={<SettingOutlined />} title="Settings">
        <Menu.Item key="/usermanagement" icon={<UsergroupAddOutlined />}>
          <NavLink activeStyle={{color: "#ffffff"}} to='/usermanagement'>User management</NavLink>
        </Menu.Item>
        <Menu.Item key="/countries" icon={<GlobalOutlined />}>
          <NavLink activeStyle={{color: "#ffffff"}} to='/countries'>Countries</NavLink>
        </Menu.Item>
        <Menu.Item key="/cities" icon={<EnvironmentOutlined />}>
          <NavLink activeStyle={{color: "#ffffff"}} to='/cities'>Cities</NavLink>
        </Menu.Item>
        </SubMenu>
      
      </Menu>
    </Sider>
  )
}