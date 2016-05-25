/*******
Author: Yongzhi Huang
Website: https://www.youtube.com/pentacode
Twitter: twitter.com/pentacodevids
03-enhanced_object_literals_default_values.js
********/

// Enhanved Object Literals
let foo = 'bar';
let myObj = {
	foo,	// same as foo: foo
	_name: 'pentacode',
	_age: 5,
	whoAmI() {
		// Set a function property 
		console.log(`I am ${this._name} and I am ${this._age} years old`);
	},
	[ 'prop_' + (() => 'dynamic')() ]: 'a dynamic property'	// Dynamic key name
}

console.log(myObj.foo);
console.log(myObj.whoAmI())
console.log(myObj.prop_dynamic)

// Default values
function add(x,y) {
	if (!y) {
		y = 0;
	}
	console.log(x + y);
	return x + y;
}

function add(x, y=0) {
	console.log(x + y);
	return x + y;
}

add(3, 4); // 7
add(3); // 3

// Evaluating default value at call time
function pusher(value, arr = []) {
	arr.push(value);
	return arr;
}

let fruit = pusher('apple');
console.log(fruit);	// ['apple']
