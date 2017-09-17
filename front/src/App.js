import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Canvas from './Canvas.js';
import Tree from './Tree.js';
import Console from './Console.js'


class App extends Component {
  constructor(props){
      super(props);
      this.state=({
        "maze": {
          "name":"Raid1",
          "size":4,
          "tiles":
            [
              {"type":14, "id":1, "class":"solution"},
              {"type":1, "id":2, "class":"solution"},
              {"type":13, "id":3, "class":""},
              {"type":123, "id":4, "class":""},
              {"type":234, "id":5, "class":"start"},
              {"type":24, "id":6, "class":"solution"},
              {"type":14, "id":7, "class":"solution"},
              {"type":12, "id":8, "class":"solution"},
              {"type":124, "id":9, "class":""},
              {"type":4, "id":10, "class":"solution"},
              {"type":23, "id":11, "class":"solution"},
              {"type":24, "id":12, "class":"solution"},
              {"type":34, "id":13, "class":""},
              {"type":23, "id":14, "class":""},
              {"type":134, "id":15, "class":"end"},
              {"type":23, "id":16, "class":"solution"}
            ]
        }
      });
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

  postCode(maze, code){
    fetch('/maze/solve', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([maze,code])
    })
  }

  render() {
    return (
      <div>
        <div className="console container">
          <Console postCode={this.postCode.bind(this)}/>
        </div>
        <br/>
        <div className="container flex">
          <div className="col-md-12">
            <h1 className="title">Este es el laberinto</h1>
            <p>La solución es encontrar el camino entre los dos puntos:</p>
          </div>
          <div className="flexrow">
            <div className="">
              <p>Inicio:</p>
            </div>
            <div className="">
              <div className="startmenu"></div>
            </div>
            <div className="">
              <p>Final:</p>
            </div>
            <div className="">
              <div className="endmenu"></div>
            </div>
          </div>
        </div>
        <div className="canvas container">
          <Canvas maze={this.state.maze}/>
        </div>
        <br/>
        <div className="container flex">
          <div className="col-md-12">
            <h1 className="title">Resultado</h1>
            <p>Acá está la solución al laberinto como el algoritmo la propuso!</p>
          </div>
        </div>
        <div className="tree container">
          <Tree maze={this.state.maze}/>
        </div>
      </div>
    );
  }
}

export default App;
