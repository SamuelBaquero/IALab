import React, {Component} from 'react';

import './Canvas.css'

export default class Canvas extends Component{
	constructor(props){
		super(props);

		this.state = {
	      maze: {
	          size:'4',
	          squares:
	            [
	              {id:14},
	              {id:1},
	              {id:13},
	              {id:123},
	              {id:234},
	              {id:24},
	              {id:14},
	              {id:12},
	              {id:124},
	              {id:4},
	              {id:23},
	              {id:24},
	              {id:34},
	              {id:23},
	              {id:134},
	              {id:23}
	            ]
	     	}
		}
	}

	renderMaze() {
		return (
			this.state.maze.squares.map((t)=>{
				const sqsize = 100/this.state.maze.size;
				const style = {
					width: sqsize + '%',
					height: sqsize + '%',
				}
				const tileclass = 'tile tile'+t.id;
				return(
					<div className="cell" style={style}>
						<div className={tileclass}>{t.id}</div>
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