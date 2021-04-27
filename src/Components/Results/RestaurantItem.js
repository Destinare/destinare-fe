import React, { Component } from 'react'

export default class RestaurantItem extends Component {
    render() {
        return (
            <div>
                <div className="restaurantsItem">
                    <p>Restaurant Name: {this.props.rName}</p>
                    <a href={this.props.rWeb}>
                        <p>Website</p>
                    </a>
                    <img className="image" alt={this.props.rName} src={this.props.rUrl} />
                </div>
            </div>
        )
    }
}
