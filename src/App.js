import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import MainPart from './MainPart';
import Aboutme from './Aboutme';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainPart />
        <Aboutme />
      </div>
    );
  }
}

export default App;
