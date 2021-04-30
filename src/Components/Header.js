import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../asset/full-logo.jpg";

export default withRouter(
  class Header extends Component {
    render() {
      return (
        <div>
          <nav className="navContainer">
            {this.props.location.pathname !== "/" && (
              <NavLink className="nav-link" exact activeClassName="link" to="/">
                Search
              </NavLink>
            )}

            {this.props.location.pathname !== "/about" && (
              <NavLink
                className="nav-link"
                exact
                activeClassName="link"
                to="/about"
              >
                About Us
              </NavLink>
            )}
            <img className="logo" src={logo} alt="destinare-logo" />
          </nav>
        </div>
      );
    }
  }
);
