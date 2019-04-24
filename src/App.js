import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import MainPart from './MainPart/MainPart';
import Aboutme from './Aboutme/Aboutme';
import Portfolio from './Portfolio/Portfolio';
import Blog from './Blog/Blog';
import Contactme from './Contactme/Contactme';

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
