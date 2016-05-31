/*******
Author: Yongzhi Huang
Website: https://www.youtube.com/pentacode
Twitter: twitter.com/pentacodevids
08-generators.js
********/

/*
- Generators are functions where the execution can be "paused" within itself via the keyword 'yield', it can then be restarted only from the outside.
- Allows 2-way message passing, either from inside out (sending message out from each yield) or outside in 
 */

function *myGenerator() {
	var name = yield 'I need a name';
	console.log(name);
}

var x = myGenerator();
x.next();
