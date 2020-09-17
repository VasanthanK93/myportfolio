import React, { Component } from 'react'

export const Widecard = () => {
    return (
        <div className="card bg-light" style={{ marginTop: "20px" }}>
            <h5 className="card-header">
                {this.props.title}</h5>
            <div className="card-body">
                <h6 className="card-text">{this.props.from}</h6>
                <h6 className="card-text">{this.props.duration}</h6>
            </div>

        </div>
    )
}