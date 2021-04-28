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
    console.log(this.state.results.city)
    return (
      <div>
        <h1>Welcome to Destinare!</h1>
        <div className = 'search-bar'>
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
        </div>
        <h2>Search Results</h2>
        <div className="results">

          
          <ListPage results={this.state.results} />
        </div>
      </div>
    );
  }
}
