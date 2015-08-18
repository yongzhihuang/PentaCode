var async = require('async');
var _ = require('lodash');

//Generate an array of 10 random tasks;
var tasksList = _.times(10, _.uniqueId.bind(null, 'task_'));

// Gif demonstration: https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966

// Create a cargo object with payload 3
var tasksCargo = async.cargo(function (tasks, callback) {
    for(var i=0; i<tasks.length; i++){
      console.log('working on ' + tasks[i].name);
    }

    callback();
    //Something goes wrong, this will pass error to the task function and it will error out.
    //callback('broke');
}, 3);


//Push tasks to tasksList
_.each(tasksList, function(task) {
	tasksCargo.push({name: task}, function(err) {
		//Something went wrong
		if (err) {
			console.log(err);
			return;
		}

		//All good here
		console.log('Task ' + task + ' is done');
	});
});
