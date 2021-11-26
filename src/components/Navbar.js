import React, { Component } from 'react';
import Identicon from 'identicon.js';
import box from '../box.png'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark p-0 text-monospace">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="."
          target="_self"
          rel="noopener noreferrer"
        >
          <img src={box} width="30" height="30" className="align-top" alt="" />
          BlockStore
        </a>
        <ul className="navbar-nav px-3">
          <b className='text-white'>{'VIT'}</b>
        </ul>
      </nav>
    );
  }
}

export default Navbar;