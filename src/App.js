import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import SearchPage from "./Components/SearchPage";
import AboutPage from "./Components/AboutPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact render={(routerProps) => <SearchPage />} />
            <Route
              path="/about"
              exact
              render={(routerProps) => <AboutPage />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
