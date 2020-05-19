import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/images/logo.svg'


export class Navbar extends Component {
  render() {
    return (
      <div className="position-relative">
        <header className="Header py-0 px-2">
          <a className="Header-link px-1" href="/">
            <img src={logo} height="32" alt="SB" />
          </a>
          <a className="Header-link py-3 px-1"
            href="/">SHAGUN BANDI</a>
        </header>
      </div>
    );
  }
}
export default connect()(Navbar);
