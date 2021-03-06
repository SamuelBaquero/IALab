var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var solver = require('../public/javascripts/solver.js');

/* URL DE MONGO */
var url = "mongodb://localhost:27017/labAI";

function getMaze(callback){
	mongodb.connect(url, (err, db) => {
		if(err) throw err;

		var mazes = db.collection("maze");

		mazes.find({}).toArray((err2, maze) => {
			if(err2) throw err2;

			callback(maze);
		});
	});
}

function postMaze(mazecode, callback){
	callback(solver.solve(mazecode.maze,mazecode.code, callback));
}

/* GET home page. */
router.get('/maze', function(req, res){
	getMaze((maze)=>{
		res.json(maze);
	});
});

router.post('/maze/solve', function(req, res){
	postMaze((maze)=>{
		res.json(maze);
	});
});

module.exports = router;
