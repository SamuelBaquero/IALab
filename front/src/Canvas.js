import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Canvas.css'

class Canvas extends Component{
	constructor(props){
		super(props);
	}

	renderMaze() {
		return (
			this.props.maze.tiles.map((t)=>{
				const sqsize = 100/this.props.maze.size;
				const style = {
					width: sqsize + '%',
					height: sqsize + '%'
				}
				const contentclass = t.class;
				const tileclass = 'tile tile'+t.type;
				return(
					<div className="cell" style={style}>
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
		return(
			<div className="row">
				<div className="canvas">
					{this.renderMaze()}
				</div>
			</div>
		);
	}
}

Canvas.propTypes ={
	maze: PropTypes.object.isRequired
}

export default Canvas;
