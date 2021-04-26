import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

export default withRouter(
  class Header extends Component {
    render() {
      return (
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
        </nav>
      );
    }
  }
);
