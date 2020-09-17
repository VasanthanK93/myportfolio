import React, { Component } from 'react'

export const SkillsCard = (props) => {
  return (
    <div className="card" >
      <h5 className="card-header text-center">
        {props.data.name}
      </h5>
      <div className="card-body">
        <div className="card-deck">
          {props.data.data.map(val => {
            return (
              <div key={val.name} className="card col-md-3 text-center" style={{ border: "none" }}>
                <img className="card-img-top" style={{ height: "150px", width: "150px" }} src={val.image} alt="Card cap" />
                <div className="card-body">
                  <h6 className="card-title">{val.name}</h6>
                </div>
              </div>)
          })}
        </div>
      </div>
    </div>
  )
}