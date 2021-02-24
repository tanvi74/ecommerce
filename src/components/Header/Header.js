import React from "react";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { string, bool } from "prop-types";
import defaultConfigs from "./defaultConfigs";
import NavBar from "../NavBar/NavBar";
import CategoryDropdown from "./../CategoryDropdown";
import "./style.css";

const { Search } = Input;

export default class Header extends React.Component {
  static defaultProps = { ...defaultConfigs };

  static propTypes = {
    /** Name of the website / Logo */
    websiteName: string,

    /**Background color of Header */
    backgroundColor: string,

    /**Whether Header has SearchBar or not */
    hasSearchBar: bool,

    /**Whether Header has NavBar or not */
    hasNavBar: bool,
  };

  state = {
    searchTerm: "",
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{ backgroundColor: this.props.backgroundColor }}
          className="header"
        >
          <Link to="/">
            <h1 className="logo">{this.props.websiteName}</h1>
          </Link>
          <CategoryDropdown />
          {this.props.hasSearchBar ? (
            <Search
              className="search-bar"
              placeholder="Search Products by Pincode"
              allowClear
              size="medium"
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
              onSearch={() => {
                this.props.onSearchSubmit(this.state.searchTerm);
              }}
            />
          ) : (
            ""
          )}
          {this.props.hasNavBar ? (
            <div className="nav-bar_large-screen">
              <NavBar />
            </div>
          ) : (
            ""
          )}
        </div>
        {this.props.hasNavBar ? (
          <div className="nav-bar_small-screen">
            <NavBar />
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}
