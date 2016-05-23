/*******
Author: Yongzhi Huang
Website: https://www.youtube.com/pentacode
Twitter: twitter.com/whyzhi
06-loops_iteration.js
********/
const fruits = ['apple', 'pear', 'banana', 'strawberry'];

// No guarantee with order or iteration
for (let fruit in fruits) {
	console.log(fruit);
}

// Guarantees order of iteration
for (let fruit of fruits) {
	console.log(fruit);
}

const name = 'pentacode';

for (let letter of name) {
	console.log(letter);
}

console.log([...name]);

/* How does it work?
fruits implements an iterator function with es6 symbols
fruit[Symbol.iterator] = function() {
	return {
		next: function() {}
	}
}



