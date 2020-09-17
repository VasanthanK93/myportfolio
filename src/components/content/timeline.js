import React, { Component } from 'react'

import { Widecard } from '../widecard'

const edudata = [{ title: "Bachelor of Engineering,Electronics and Communication Engineering", from: "Bhajarang Engineering College(Affiliated to Anna university)", duration: "2010-2014" },
{ title: "SSLC | HSC", from: "K.C.Sankarlinga Nadar Hr Sec School", duration: "2003-2010" }]

const expdata = [{ title: "Full Stack Developer", from: "Tata Consultancy Service", duration: "2019-Present" },
{ title: "NodeJS Developer", from: "Cholamandalam Investment and Finance Company", duration: "2016-2019" }]


export const Timeline = (props) => {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         'edudata': [{ title: "Bachelor of Engineering,Electronics and Communication Engineering", from: "Bhajarang Engineering College(Affiliated to Anna university)", duration: "2010-2014" },
    //         { title: "SSLC | HSC", from: "K.C.Sankarlinga Nadar Hr Sec School", duration: "2003-2010" }],
    //         'expdata': [{ title: "Full Stack Developer", from: "Tata Consultancy Service", duration: "2019-Present" },
    //         { title: "NodeJS Developer", from: "Cholamandalam Investment and Finance Company", duration: "2016-2019" }]
    //     }
    // }

    const data = this.props.display === 'Experience' ? expdata : edudata
    return (
        <div className="divstyle">
            <h3 className="subtopic">{props.display}</h3>

            {data.map(val => {
                return <Widecard key={val.from} title={val.title} from={val.from} duration={val.duration} />
            })}
        </div>
    )
}