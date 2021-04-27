import React, { Component } from 'react'

export default class EventItem extends Component {
    render() {
        return (
            <div>
                <div className="eventsItem">
                    <p>Venue Name: {this.props.eName}</p>
                    <a href={this.props.eWeb}>
                        <p>Website</p>
                    </a>
                    <p>
                        Date &#38; time: {this.props.eDate}, {this.props.eTime}
                    </p>
                </div>
            </div>
        )
    }
}
