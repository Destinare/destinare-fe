import React, { Component } from "react";
import { getAllTheDataFromTheBackEndAndTransferItToTheFrontEndPleaseWork } from "./ApiUtils";
import ListPage from "./Results/ListPage";

export default class SearchPage extends Component {
  state = {
    results: [],
    search: "",
  };

  searchResult = async () => {
    const city = this.state.search.split(",")[0];
    const state = this.state.search.split(", ")[1];

    const results = await getAllTheDataFromTheBackEndAndTransferItToTheFrontEndPleaseWork(
      city,
      state
    );

    this.setState({
      results,
    });
  };
  
  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleClick = async () => {
    await this.searchResult();
  };

  render() {
    return (
      <div>
        <h1>Welcome to Destinare!</h1>
        <input
          onChange={this.handleChange}
          className="input"
          value={this.state.search}
          placeholder="City and state"
          name="search"
        />
        <button className="button" onClick={this.handleClick}>
          Search
        </button>
        <div className="results">
          <h2>Search Results</h2>
          <ListPage results={this.state.results} />
        </div>
      </div>
    );
  }
}
