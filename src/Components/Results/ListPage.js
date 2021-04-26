import React, { Component } from "react";
import ItemPage from "./ItemPage";

export default class ListPage extends Component {
  render() {
    return (
      <div>
        <div className="weather">
          {this.props.weatherResults.map((weather) => (
            <ItemPage
              temp={weather.temperature}
              date={weather.date}
              cast={weather.forecast}
            />
          ))}
        </div>
        <div className="parkList">
          {this.props.parkResults.map((park) => (
            <ItemPage
              pName={park.parkName}
              pWeb={park.website}
              pUrl={park.image}
            />
          ))}
        </div>
        <div className="eventList">
          {this.props.eventResults.map((event) => (
            <ItemPage
              eName={event.venueName}
              eWeb={event.website}
              eDate={event.date}
              eTime={event.time}
            />
          ))}
        </div>
        <div className="restaurantList">
          {this.props.restaurantResults.map((restaurant) => (
            <ItemPage
              rName={restaurant.restaurantName}
              rWeb={restaurant.website}
              rUrl={restaurant.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
