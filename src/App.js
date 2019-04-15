import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import MainPart from './MainPart';
import Aboutme from './Aboutme';
import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainPart />
        <Aboutme />
        <Portfolio />
      </div>
    );
  }
}

export default App;
