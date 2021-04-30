import React, { Component } from 'react'

export default class RestaurantItem extends Component {
    render() {
        return (
            <div>
                <div className="restaurantsItem">
                    <p>{this.props.rName}</p>
                    <img className="image" alt={this.props.rName} src={this.props.rUrl} />
                    <a href={this.props.rWeb}>
                        <p>Website</p>
                    </a>
                </div>
                <hr/>
                <br/>
            </div>
        )
    }
}
