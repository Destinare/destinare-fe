import React, { Component } from "react";
import ListPage from "./Results/ListPage";

export default class SearchPage extends Component {
  render() {
    //Click handler
    return (
      <div>
        <h1>Welcome to Destinare!</h1>
        <input className="input" placeholder="City and state" name="search" />
        <button className="button" onClick={this.handleClick}>
          Search
        </button>
        <div className="results">
          <h2>Search Results</h2>
          <ListPage/>
        </div>
      </div>
    );
  }
}
