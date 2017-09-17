import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Console.css';

class Console extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="row">
				<h1 className="title">Función de entrada para las IA's</h1>
				<p>Acá puedes montar la función que se evaluará para que las IA's logren pasar el laberinto</p>
				<textarea className="input" name="Console" id="consoleinput" cols="30" rows="10"></textarea>
			</div>
		)
	}
}

export default Console;