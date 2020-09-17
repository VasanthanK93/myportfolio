import React, { Component } from 'react'

import { SkillsCard } from '../skillscard'

import { bootstrap, css3, express, firebase, github, heroku, html5, javascript, mongodb, nodejs, npm, react } from '../../img'

export default class Skills extends Component {
    constructor() {
        super()
        this.state = {
            'data': [{ name: 'LANGUAGES', data: [{ name: "Javascript", image: javascript }] },
            { name: 'FRONT-END', data: [{ name: "HTML5", image: html5 }, { name: "CSS3", image: css3 }, { name: "Bootstrap", image: bootstrap }, { name: "React", image: react },] },
            { name: 'SERVER', data: [{ name: "Nodejs", image: nodejs }, { name: "ExpressJS", image: express }, { name: "Npm", image: npm }] },
            { name: 'DATABASES', data: [{ name: "MongoDB", image: mongodb }] },
            { name: 'OTHERS', data: [{ name: "Github", image: github }, { name: "heroku", image: heroku }, { name: "firebase", image: firebase }] }]
        }
    }
    render() {
        return (
            <div className="divstyle">
                <h3 className="subtopic">Skills</h3>
                {this.state.data.map(val => {
                    return <SkillsCard key={val.name} data={val} />
                })}
            </div>
        )
    }
}