import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { array } from "prop-types";

import defaultConfigs from "./defaultConfigs";
import "./style.css";

export default class NavBar extends React.Component {
  static defaultProps = { ...defaultConfigs };

  static propTypes = {
    /** Array of NavBar items */
    navBarItems: array,

    /** Default Selected items array */
    defaultSelectedKeys: array,
  };

  menuItems = this.props.navBarItems.map((item) => {
    return (
      <Menu.Item key={item.title}>
        <Link to={item.navigateTo}>{item.title}</Link>
      </Menu.Item>
    );
  });

  render() {
    return (
      <React.Fragment>
        <Menu
          className="nav-bar"
          defaultSelectedKeys={this.props.defaultSelectedKeys}
          mode="horizontal"
        >
          {this.menuItems}
        </Menu>
      </React.Fragment>
    );
  }
}
