import React, { Component } from 'react'

export default class ParkItem extends Component {
    render() {
        return (
            <div>
                <div className="parksItem">
                    <p>{this.props.pName}</p>
                    <img className="image" src={this.props.pUrl} alt={this.props.pName} />
                    <a href={this.props.pWeb}>
                        <p>Website</p>
                    </a>
                </div>
                <hr/>
                <br/>
            </div>
        )

    }
}
