import React, { Component } from "react";

export default class WeatherItem extends Component {
  render() {
    return (
      <div>
        <div className="weatherItem">
          <p>{this.props.date}</p>
          <p>{this.props.temp} °F
</p>
          <p>{this.props.cast}</p>
          <hr/>
          <br/>
        </div>
      </div>
    );
  }
}
