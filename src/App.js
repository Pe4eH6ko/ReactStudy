import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import MainPart from './MainPart';
import Aboutme from './Aboutme';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contactme from './Contactme';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainPart />
        <Aboutme />
        <Portfolio />
        <Blog />
        <Contactme />
      </div>
    );
  }
}

export default App;
