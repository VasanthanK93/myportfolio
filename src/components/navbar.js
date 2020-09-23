import React, { Component } from 'react';

import Navitem from './navitem';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      items: [{ item: 'Home', tolink: '/' }, { item: 'About', tolink: '/about' },
        { item: 'Experience', tolink: '/experience' }, { item: 'Education', tolink: '/education' },
        { item: 'Skills', tolink: '/skills' }, { item: 'Contact', tolink: '/contact' }],
    };
  }

  render() {
    const value = this.state;
    return (
      <nav>
        <ul>
          {
          value.items.map((item) => <Navitem key={item.item} to={item.tolink} label={item.item} />)
          }
        </ul>
      </nav>
    );
  }
}
