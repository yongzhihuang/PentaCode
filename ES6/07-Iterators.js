/*******
Author: Yongzhi Huang
Website: https://www.youtube.com/pentacode
Twitter: twitter.com/pentacodevids
07-iterators.js
********/


const fruits = ['apple', 'pear', 'banana', 'strawberry'];

// No guarantee with order or iteration
for (let key in fruits) {
	console.log(fruits[key]);
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
	// Set arrayindex
	var index = 0;
	return {
		next: function() {
			// In a way this is similar to recursion, where we will pass in a modified value as a parameter to the function Iterator and call it as long as done = false
			return index < array.length ? {value: array[index++], done: false} : {done: true};
		}
	}
}

- Other things with built in iterable: String, Array, Map, Set
- It's actually the secret behind the Spread operator



