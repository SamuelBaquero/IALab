import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Canvas from './Canvas.js'

class App extends Component {
  constructor(props){
      super(props);

      this.state={
        maze:{}
      }
  };

  componentDidMount(){
    fetch("/maze", {method:"GET", 
      headers:"application/json"})
    .then((res)=>{
      if(res.ok)
        return res.json();
    })
    .then((maze)=>{
      this.setState({
        maze: maze
      })
    })
  }

  render() {
    return (
      <div>
        <div className="canvas container">
          <Canvas maze={this.state.maze}/>
        </div>
      </div>
    );
  }
}

export default App;
