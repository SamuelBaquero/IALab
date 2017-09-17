var jailed = require('jailed');
	
function solve(maze, code, callback){

	var mproblem = maze;
	var api = {
	    findChilds: this.createNode(mproblem),
	    findPath: this.findPath(mproblem),
	    getMaze: this.getMaze(mproblem)
	}

	var plugin = new jailed.DynamicPlugin(code, api);
}

function getNode(maze, node){
	var paths = maze.nodes.map((t, node)=>{
		return (t.id === node)?tnodes:error;
	});
}

function getMaze(maze){
	var maze = maze;
	return this.maze;
}

function findPath(maze){
	
}