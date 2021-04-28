import React, { Component } from "react";
import WeatherItem from "./WeatherItem";
import EventItem from "./EventItem";
import ParkItem from "./ParkItem";
import RestaurantItem from "./RestaurantItem"

export default class ListPage extends Component {
  render() {
    const weatherResults = this.props.results[0];
    const parksResults = this.props.results[1];
    const eventsResults = this.props.results[2];
    const restaurantsResults = this.props.results[3];

if(this.props.results[0]) {
    return (
      <div className= 'results-container'>
        <div className="weatherList">
        <h3>Weather</h3>
          {weatherResults.map((weather) => (
          <WeatherItem
              temp={weather.temperature}
              date={weather.date}
              cast={weather.forecast}
            />)
          )}
          
        </div>
        <div className="parkList">
          <h3>National Parks</h3>
          {parksResults.map((park) => (
            <ParkItem
              pName={park.parkName}
              pWeb={park.website}
              pUrl={park.image}
            />
          ))}
        </div>
        <div className="eventList">
          <h3>Events</h3>
          {eventsResults.map((event) => (
            <EventItem
              eName={event.venueName}
              eWeb={event.website}
              eDate={event.date}
              eTime={event.time}
            />
          ))}
        </div>
        <div className="restaurantList">
          <h3>Restaurants</h3>
          {restaurantsResults.map((restaurant) => (
            <RestaurantItem
              rName={restaurant.restaurantName}
              rWeb={restaurant.website}
              rUrl={restaurant.image}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return null
  }}
}
