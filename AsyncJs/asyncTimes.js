var async = require('async');

//A complex function to insert entries to database
var addEntryToDB = function(id, callback) {
	//Pass something to first param if it errors out
	callback(null, {
		entryId: id,
		name: 'username' + id
	});
}

//times(n, iterator, [callback])
async.times(5, function(n, next) {
	addEntryToDB(n, function(err, entry) {
		//To simulate error, uncomment the following 3 lines
		if (n === 3) {
			err = 'Someting bad happened';			
		}
		next(err, entry);
	});
}, function(err, entries) {
	if (err) {
		console.log(err);
	}
	//Success, print out entries
	console.log(entries);
});
