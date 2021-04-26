import React, { Component } from "react";

export default class ItemPage extends Component {
  render() {
    return (
      <div>
        <div className="weatherItem">
          <p>Temperature: {this.props.temp}</p>
          <p>Date: {this.props.date}</p>
          <p>Forecast: {this.props.cast}</p>
        </div>
        <div className="parksItem">
          <p>Park Name: {this.props.pName}</p>
          <a href={this.props.pWeb}>
            <p>Website</p>
          </a>
          <img src={this.props.pUrl} alt={this.props.pName} />
        </div>
        <div className="eventsItem">
          <p>Venue Name: {this.props.eName}</p>
          <a href={this.props.eWeb}>
            <p>Website</p>
          </a>
          <p>
            Date & time: {this.props.eDate}, {this.props.eTime}
          </p>
        </div>
        <div className="restaurantsItem">
          <p>Name: {this.props.rName}</p>
          <a href={this.props.rWeb}>
            <p>Website</p>
          </a>
          <img alt={this.props.rName} src={this.props.rUrl} />
        </div>
      </div>
    );
  }
}
