import React, { Component } from "react";

export default class WeatherItem extends Component {
  render() {
    return (
      <div>
        <div className="weatherItem">
          <p>Temperature: {this.props.temp}</p>
          <p>Date: {this.props.date}</p>
          <p>Forecast: {this.props.cast}</p>
        </div>
      </div>
    );
  }
}
