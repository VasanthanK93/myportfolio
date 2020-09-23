import React from 'react'

export const Widecard = (props) => {
    return (
        <div className="card bg-light" style={{ marginTop: "20px" }}>
            <h5 className="card-header">
                {props.title}</h5>
            <div className="card-body">
                <h6 className="card-text">{props.from}</h6>
                <h6 className="card-text">{props.duration}</h6>
            </div>

        </div>
    )
}