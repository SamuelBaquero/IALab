var jailed = require('jailed');

var mazeej = {
	nodes:[
		[1,2],
		[1,5],
		[2,1],
		[2,3],
		[2,6],
		[3,2],
		[3,4],
		[4,3],
		[5,1],
		[6,2],
		[6,10],
		[7,8],
		[7,11],
		[8,7],
		[8,12],
		[9,13],
		[10,6],
		[10,11],
		[10,14],
		[11,10],
		[11,7],
		[12,8],
		[12,16],
		[13,9],
		[13,14],
		[14,13],
		[14,10],
		[15,16],
		[16,15],
		[16,12]
	]
}
	
function solve(code, maze, callback){

	var codeej = 'findCon'

	var code = "application.remote.alert('Hello from the plugin!');";

	var mproblem = maze;
	var api = {
	    findChilds: this.findChilds()
	}

	var plugin = new jailed.DynamicPlugin(code, api);*/
}

function findChilds(maze, node){
	var paths = maze.nodes.map((t, node)=>{
		return (t.id === node)?tnodes:error;
	});
}

