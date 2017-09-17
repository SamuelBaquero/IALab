import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Tree.css';
 
export class Tree extends Component {
	constructor(props) {
		super(props);
	}
	
	renderTree() {
		return (
			this.props.maze.tiles.map((t)=>{
				const sqsize = 100/this.props.maze.size;
				const style = {
					width: sqsize + '%',
					height: sqsize + '%'
				}
				const contentclass = t.class+'sol';
				const tileclass = 'tile tile'+t.type;
				return(
					<div className="cell" key={t.id} style={style}>
						<div className={tileclass}>
							{t.id}
							<div className={contentclass}>
							</div>
						</div>
					</div>
					);
			})
		)
	}


	render() { 
		return (
		  <div className="row">
		  	<div className="tree">
		  		{this.renderTree()}
		  	</div>
		  </div>
		);
	}
}

Tree.propTypes ={
	maze: PropTypes.object.isRequired
}

export default Tree;