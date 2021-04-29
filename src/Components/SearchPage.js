import React, { Component } from "react";
import { getAllTheDataFromTheBackEndAndTransferItToTheFrontEndPleaseWork } from "./ApiUtils";
import ListPage from "./Results/ListPage";
import Spinner from "./Spinner";

export default class SearchPage extends Component {
  state = {
    results: [],
    search: "",
    loading: false
  };

  componentDidMount = async () => {
    const url = new URLSearchParams(this.props.location.search);
    const city = url.get('city');
    const state = url.get('state');

    if(city !== null){
      await this.searchResult(city, state);
    }
  }

  searchResult = async (city, state) => {
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
    const city = this.state.search.split(",")[0];
    const state = this.state.search.split(", ")[1];

    this.props.history.push(`?city=${city}&state=${state}`);

    this.setState({loading: true})
    await this.searchResult(city, state);
    this.setState({loading: false})
  };

  render() {
   
    return (
      <div>
        <h1>Welcome to Destinare!</h1>
        <div className = 'search-bar'>
        <input
          onChange={this.handleChange}
          className="input"
          value={this.state.search}
          placeholder="City and State"
          name="search"
        />
        <button className="button" onClick={this.handleClick}>
          Search
        </button>
        </div>
        <h2>Search Results</h2>
        <div className="results">
          {this.state.loading === true && <Spinner />}
          {this.state.loading === false && <ListPage results={this.state.results} />}
          <ListPage results={this.state.results} />
        </div>
      </div>
    );
  }
}
