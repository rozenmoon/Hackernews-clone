import React, { Component } from 'react';
import News from './Components/News';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hacker News - Clone</h1>
        </header>
        <div className="App-intro">
          Top 100 New Stories
        </div>
        <News />
        <div className="App-footer">
        </div>
      </div>
    );
  }
}

export default App;