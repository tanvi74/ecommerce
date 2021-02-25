/** Sub-Admin Main Frame
 * @author Tanvi 1998tanvi@gmail.com
 * Functional Component */

import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import SiderMenu from './SiderMenu';
import './SubAdminPanel.css';
import logoutAction from '../../Actions/logoutAction';
import searchTerm from '../../Actions/searchTerm';
import CategoryDropdown from "./../CategoryDropdown";

import { Layout, Menu, Button, Dropdown, Input, Row, Col } from 'antd';

import RoutingList from '../../Routes/RoutingList';

const { Header, Content, Footer } = Layout;
const { Search } = Input;


function MainFrame() {
  const history = useHistory();
  const dispatch = useDispatch();
  const search = useSelector(state => state.searchTerm);
  const [collapsed, setCollapsed] = useState(false);

  const handleOnCollapse = () => {
    setCollapsed(prevState => !prevState);
  };


  /** Function will handle logout */
  const handleLogout = async() => {
    localStorage.clear();

    // calling action Logout
    dispatch(logoutAction());

    // redirecting to login page after logout
    history.push('/login');
  }

   // menu for dropdown
    const menu = (
      <Menu  >
        <Menu.Item key="1" onClick={handleLogout}>Log Out</Menu.Item>
      </Menu>
    );

    
    return (
        <div className="space-align-container">
          <Layout>
            <SiderMenu collapsed={collapsed}  handleOnCollapse={handleOnCollapse} search = {searchTerm}/>
            <Layout>
                <Header className="site-layout-background" style={{ padding: 0 }} > 
                <Row type="flex" justify="space-around" align="middle">
                <Col ><span className="adminDashboard">HyperLocal</span></Col>
                  <Col>
                  <Search placeholder="Search Products by Pincode" onSearch={(e)=>{dispatch(searchTerm(e))}} enterButton /> </Col>
                  <Col>
                  <Search placeholder="Search Products" onSearch={(e)=>{console.log(e)}} enterButton />
                  </Col>
                  <Col><CategoryDropdown /></Col>
                  <Col>
                      <Dropdown overlay={menu} placement="bottomRight" arrow>
                        <Button type="primary" size="large">Setting</Button>
                      </Dropdown>
                  </Col>
                </Row>     
                </Header>

                <Content style={{ margin: '24px 16px 0' }} >
                  <div style={{ padding: 24, background: '#fff', minHeight: 20 }}>
                    <RoutingList />
                  </div>
                </Content>
            
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

            </Layout>
          </Layout>
      </div>      
    );
  }


export default MainFrame;