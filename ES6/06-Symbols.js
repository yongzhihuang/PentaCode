/*******
Author: Yongzhi Huang
Website: https://www.youtube.com/pentacode
Twitter: twitter.com/pentacodevids
06-symbols.js
********/
/*
 - New primitive in ES6
 - Unique and immutable data type
 - Concept of namespace
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

// Lookup
// If Symbol.for('x') does not exist, the first call will create it, by the time it get to the comparison on the right hand side, it's used as a lookup, so Symbol.for() both creates and looks up a symbol.
console.log(Symbol.for('x') === Symbol.for('x'))


// For use in iterators (lesson 7)
var fruit = [];
fruit[Symbol.iterator] = function() {}

/*
What do we use Symbols for?
 1. Use it to define unique object properties to avoid name clashes
 2. "Private" property, you can only access them via ES6 apis, meaning you'll have to explicitly ask for them, serves as a protection against accidental access
 3. Predefined way to define implementation, example Symbol.iterator
*/
 */
