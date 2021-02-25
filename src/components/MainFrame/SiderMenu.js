/** Sub-Admin Main Frame Side menu
 * @author Tanvi 1998tanvi@gmail.com
 * Functional Component */

import React from 'react';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import {
  AppstoreAddOutlined
} from '@ant-design/icons';
// import './Style.less';


const { Sider } = Layout;

function SiderMenu({ handleOnCollapse, collapsed }) {
  const theme = 'dark';

  const history = useHistory();


  // Side menu of dashboard 
  const handleSiderMenuClick = action => {
    console.log('menu:', action);
    switch (action.key) {
      case 'dashboard':
        history.push({
            pathname: '/',
        });
        break;
      case 'MyCart':
        history.push({
            pathname: '/cart',
        });
        break;
      case 'AssignRequests':
        history.push({
            pathname: '/sub-admin/assign-requests',
            
        });
        break;
      case 'ChooseProducts':
        history.push({
            pathname: '/sub-admin/choose-products',
            });
        break;
      case 'ChooseAppliances':
        history.push({
            pathname: '/sub-admin/choose-appliances',
            
        });
        break;
      case 'ChooseProjects':
        history.push({
            pathname: '/sub-admin/choose-projects',
            
        });
        break;
      case 'ChoosePlans':
        history.push({
            pathname: '/sub-admin/choose-plans',
            
        });
        break;
      default:
        history.push({
            pathname: '/'
        });
    }
  };

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="80"
      onCollapse={handleOnCollapse}
      collapsed={collapsed}
      width="256"
      theme={theme}
    >
      <a>
        <div className="menu-logo" />
      </a>
      <Menu mode="inline" theme={theme} onClick={handleSiderMenuClick}>
        <Menu.Item key="dashboard">
            <AppstoreAddOutlined />
            <span className="nav-text">Home</span>              
        </Menu.Item>
        <Menu.Item key="MyCart" >
            <AppstoreAddOutlined />
            <span className="nav-text">My Cart</span>
        </Menu.Item>
        <Menu.Item key="MyAccount">
            <AppstoreAddOutlined />
            <span className="nav-text">My Account</span>           
        </Menu.Item>
        <Menu.Item key="OrderHistory">
            <AppstoreAddOutlined />
            <span className="nav-text">Order History</span>           
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SiderMenu;