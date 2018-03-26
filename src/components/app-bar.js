import React, { Component } from 'react';
import logo from '../bitcoin.png';

const AppBar = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <span className="App-header-text">itcoin price tracker</span>
  </header>
);

export default AppBar;
