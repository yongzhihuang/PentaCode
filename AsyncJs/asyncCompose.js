var async = require('async');

//async.compose(fn1,fn2...)
//This will make a composition out of the async functions passed in, each function will use the return value of the function that follows
//So composing a(), b(), c() will produce a(b(c()))

//Adds 5 to num
function addFive(num, callback) {
	callback(null, num + 5);
}

//Multiplies num by 10
function timesTen(num, callback) {
	callback(null, num * 10);
}

//Compose calculate(addFive(timesTen(5)))
var calculate = async.compose(addFive, timesTen);

calculate(5, function(err, result) {
	//What do you think result is equal to?
	console.log(result);
});


//seq calculate(addFive(timesTen(5)))
var calculate = async.seq(addFive, timesTen);

calculate(5, function(err, result) {
	//What do you think result is equal to?
	console.log(result);
})



