var async = require('async');

var targetNumber = 0;

//async.forever ( fn(next), callback(err) )
//async.forever will execute fn indefinitely as for as long as next() is called without an error parameter, as soon as next is called with an error parameter, the execution will stop and callback will be executed with (err) passed in.
async.forever(
	function checkIfDone(next) {
		targetNumber++;

		if (targetNumber === 5000) {
			next('Target number reached...stopping forever');
		} else {
			console.log('increasing targetNumber', targetNumber);
			next();
		}
	},
	function finished(err) {
		if (err) {
			console.log(err);
		}
	}
)
