import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListManager from './components/ListManager';
import Toggle from './components/Toggle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <code> </code>
        </p>
        <div className="row">
          <Toggle className="col-sm-4"/>
          <ListManager className="col-sm-8" title="Ingredients"/>
        </div>
      </div>
    );
  }
}

export default App;
