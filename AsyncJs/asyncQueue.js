var async = require('async');
var _ = require('lodash');

//Generate an array of 10 random tasks;
var tasksList = _.times(10, _.uniqueId.bind(null, 'task_'));

var tasksQueue = async.queue(function (task, callback) {
    console.log('Performing task: ' + task.name);
    console.log('Waiting to be processed: ', tasksQueue.length());
    console.log('----------------------------------');

    //Simulate intensive processing
    setTimeout(function() {
    	// If you want to pass an error object here, it will be caught in the task handler
    	// callback('something went wrong');
    	callback();
    }, 1000);

}, 5);

// When all is processed, drain is called
tasksQueue.drain = function() {
    console.log('all items have been processed.');
};

_.each(tasksList, function(task) {
	tasksQueue.push({name: task}, function(err) {
		//Done
		if (err) {
			console.log(err);
		}
		console.log('set of 5 is done');
	});
});

//Puts a tasks in front of the queue
tasksQueue.unshift({name: 'Most important task'}, function(err) {
		//Done
		if (err) {
			console.log(err);
		}
	});
