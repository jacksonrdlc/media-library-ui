import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Dashboard } from './Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Media Library</h1>
        </header>
        <Dashboard />
      </div>
    );
  }
}

export default App;