import React, { Component } from 'react';
import logo from './bitcoin.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="App-header-text">itcoin price tracker</span>
        </header>
      </div>
    );
  }
}

export default App;
