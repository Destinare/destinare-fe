import React, { Component } from 'react'

export default class ParkItem extends Component {
    render() {
        return (
            <div>
                <div className="parksItem">
                    <p>Park Name: {this.props.pName}</p>
                    <a href={this.props.pWeb}>
                        <p>Website</p>
                    </a>
                    <img className="image" src={this.props.pUrl} alt={this.props.pName} />
                </div>
            </div>
        )
    }
}
