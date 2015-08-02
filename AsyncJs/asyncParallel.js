var async = require('async');
var GitHubApi = require('github');

var github = new GitHubApi({
	version: '3.0.0'
});

//With Array
var stack = [];

var functionOne = function(callback) {
	callback(null, 'First function result');
}

var functionTwo = function(callback) {
	callback(null, 'Second function result');
}

var functionThree = function(callback) {
	callback(null, 'Third function result');
}

stack.push(functionOne);
stack.push(functionTwo);
stack.push(functionThree);

async.parallel(stack, function(err, result) {
	console.log('Async parallel with array', result);
});


//With Object 
var stackObject = {};

stackObject.userName = function(callback) {
	callback(null, 'Bob');
}

stackObject.age = function(callback) {
	callback(null, '28');
}

stackObject.gender = function(callback) {
	callback(null, 'male');
}

async.parallel(stackObject, function(err, result) {
	if (err) {
		console.error(err);
		return;
	}
	console.log('Async parallel with Object', result);
});
