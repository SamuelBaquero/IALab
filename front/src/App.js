import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Canvas from './Canvas.js';
import Tree from './Tree.js';
import Console from './Console.js'


class App extends Component {
  constructor(props){
      super(props);

      this.state={
        "maze": {
          "name":"Raid1",
          "size":4,
          "tiles":
            [
              {"type":14, "id":1, "class":""},
              {"type":1, "id":2, "class":""},
              {"type":13, "id":3, "class":""},
              {"type":123, "id":4, "class":""},
              {"type":234, "id":5, "class":"start"},
              {"type":24, "id":6, "class":""},
              {"type":14, "id":7, "class":""},
              {"type":12, "id":8, "class":""},
              {"type":124, "id":9, "class":""},
              {"type":4, "id":10, "class":""},
              {"type":23, "id":11, "class":""},
              {"type":24, "id":12, "class":""},
              {"type":34, "id":13, "class":""},
              {"type":23, "id":14, "class":""},
              {"type":134, "id":15, "class":"end"},
              {"type":23, "id":16, "class":""}
            ]
          }
      }
  };

  componentDidMount(){
    /*fetch("/maze", {method:"GET", 
      headers:"application/json"})
    .then((res)=>{
      if(res.ok)
        return res.json();
    })
    .then((maze)=>{
      this.setState({
        maze: maze
      })
    })*/
  }

  render() {
    return (
      <div>
        <div className="console container">
          <Console />
        </div>
        <div className="canvas container">
          <Canvas maze={this.state.maze}/>
        </div>
        <div className="tree container">
          <Tree/>
        </div>
      </div>
    );
  }
}

export default App;
