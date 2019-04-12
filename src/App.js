import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import MainPart from './MainPart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainPart />
      </div>
    );
  }
}

export default App;