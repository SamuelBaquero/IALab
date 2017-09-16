import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Canvas from './Canvas.js'

class App extends Component {
  constructor(props){
      super(props);
  };

  render() {
    return (
      <div>
        <div className="canvas container">
          <Canvas></Canvas>
        </div>
      </div>
    );
  }
}

export default App;
