/*******
Author: Yongzhi Huang
Website: https://www.youtube.com/pentacode
Twitter: twitter.com/whyzhi
07-Iterators.js
********/
const fruits = ['apple', 'pear', 'banana', 'strawberry'];

// No guarantee with order or iteration
for (let key in fruits) {
	console.log(key);
}

// Guarantees order of iteration
for (let fruit of fruits) {
	console.log(fruit);
}

const name = 'pentacode';

for (let letter of name) {
	console.log(letter);
}

//shortcut
console.log([...name]);

/* How does it work?
fruits implements an iterator function with es6 symbols

fruit[Symbol.iterator] = function() {
	// Set next array index
	var nextIndex = 0;
	return {
		next: function() {
			// In a way this is similar to recursion, where we will pass in a modified value as a parameter to the function Iterator and call it as long as done = false
			return nextIndex < array.length ? {value: array[nextIndex++], done: false} : {done: true};
		}
	}
}

- Other things with built in iterable: String, Array, Map, Set
- It's actually the secret behind the Spread operator



