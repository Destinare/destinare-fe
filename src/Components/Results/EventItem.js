import React, { Component } from 'react'

export default class EventItem extends Component {
    render() {
        return (
            <div>
                <div className="eventsItem">
                    
                    <p> {this.props.eName}</p>
                    <p>{this.props.eDate}</p>
                    <p>{this.props.eTime}</p>
                   
                    <a href={this.props.eWeb}>
                        <p>Website</p>
                    </a>
                    <hr/>
                    <br/>
                </div>
            </div>
        )
    }
}
