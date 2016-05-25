/*******
Author: Yongzhi Huang
Website: https://www.youtube.com/pentacode
Twitter: twitter.com/pentacodevids
02-block_scope_template_strings.js
********/

// Block scoped Let declaration
function myFunc() {
	// block scope level variable, only available within myFunc()
	let foo = true;

	if (foo) {
		// block scope level variable, only available within this if loop
		let car = 'tesla';
		let website = 'google.com';

		console.log(car);	// tesla
		console.log(website); // google.com
	}

	console.log(car);	// Undefined
	console.log(website); // Undefined
}

myFunc();


// Constants, it follows the same scope rule as let
const pi = 3.14;	// Declaring a constant, cannot be changed, must be initialized upon declaration
pi = 5.12;	// Error, you cannot set a constant variable after it's been first declared

const myArr = [];	//Constants are declared as a reference to a value, you can still modify it, but you cannot reassign it
myArr.push(10);	// LEGAL!
console.log(myArr);


// Template Strings
let username = 'pentacode';
let age = 5;
console.log('Saying Hi to my friend in es5, Hi ' + username + ' you are ' + age + ' years old.')
console.log(`my friend ${username} is ${age} years old.`);

// Creating line break is easy
let className = 'foo';
let balance = 400;

const outputDIV = `<div class="${className}">
											Balance: ${balance}
									 </div>`;

// Express interpolation
let x = 10;
let y = 20;
function sayHi() { return 'HI!'; }
console.log(`The sum of x+y is ${x+y}`);
console.log(`${sayHi()} viewers!`);
