import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Console.css';

class Console extends Component{
	constructor(props){
		super(props);
		this.state = ({
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
	}

	postCode(){
		this.props.postCode(this.state.maze, this.props.code);
	}

	render(){
		return(
			<div className="row">
				<h1 className="title">Función de entrada para las IA's</h1>
				<p>Acá puedes montar la función que se evaluará para que las IA's logren pasar el laberinto</p>
				<textarea className="input" name="Console" id="consoleinput" cols="30" rows="10"></textarea>
				<button className="solve" onClick={this.postCode()}>Resolver</button>
			</div>
		)
	}
}

Console.propTypes ={
	code: PropTypes.object.isRequired,
	postCode: PropTypes.func.isRequired
}

export default Console;