import React, { Component } from 'react';
import icon from '../assets/img/icon-128.png';

class Header extends Component {
  state = {
    name: 'dev',
  };

  render() {
    return (
      <header className="App-header">
        <img src={icon} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default Header;
