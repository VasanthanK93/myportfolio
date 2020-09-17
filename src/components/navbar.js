import React, { Component } from 'react'

import Navitem from "./navitem";

export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            'NavItemActive': '',
            'items': [{ item: "Home", tolink: "/" }, { item: "About", tolink: "/about" }, { item: "Experience", tolink: "/experience" }, { item: "Education", tolink: "/education" }, { item: "Skills", tolink: "/skills" }, { item: "Contact", tolink: "/contact" }]
        }
    }

    activeitem = x => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemActive': x }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    }

    render() {
        return (
            <nav>
                <ul>
                    {this.state.items.map(item => {
                        return <Navitem key={item.item} item={item.item} tolink={item.tolink} activec={this.activeitem}></Navitem>
                    })}
                </ul>
            </nav>
        )
    }
}