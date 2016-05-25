/*******
Author: Yongzhi Huang
Website: https://www.youtube.com/pentacode
Twitter: twitter.com/pentacodevids
06-Symbols.js
********/
/*
 - New primitive in ES6
 - Unique and immutable data type
 - Mainly used to guarantee unique property keys, so you don't haave to worry about overriding or conflicting with existing keys
 */

// Uniqueness
const COLOR_BLUE = 'blue';
const COLOR_BAD_BLUE = 'blue';
console.log(COLOR_BLUE === COLOR_BAD_BLUE);

// Local registry
const COLOR_RED = Symbol('red');
const COLOR_BAD_RED = Symbol('red');
console.log(COLOR_RED === COLOR_BAD_RED);

// They cannot be coverted to string implicitly
const foo = Symbol('foo');
const badFoo = new Symbol('foo');	// BAD
const sentence = 'My favorite word is ' + foo;
const anotherSentence = 'hello ' + String(foo);
console.log(anotherSentence);

// Use as Object keys
const KEY_NAME = Symbol();
const user = {};
user[KEY_NAME] = 'foo';

// or

const user = {
	[KEY_NAME]: 'foo'
}
console.log(user[KEY_NAME]);

// A word about enumerating Symbols
const myObj = {
	[Symbol('name')]: 'sally',
	property1: 1,
	property2: 2
};

// Get keys that are non symbol
console.log(Object.keys(myObj));

// Get only Symbol
console.log(Object.getOwnPropertySymbols(myObj));

// Get all
console.log(Reflect.ownKeys(myObj));

// Global registry
// Good idea to prefix them to avoid collision
const COLOR_RED = Symbol.for('red');
const COLOR_BAD_RED = Symbol.for('red');
console.log(COLOR_RED === COLOR_BAD_RED);





// For use in iterators (lesson 7)
