/*******
Author: Yongzhi Huang
Website: https://www.youtube.com/pentacode
Twitter: twitter.com/pentacodevids
05-destructuring.js
********/

const list = ['a', 'b', 'c', 'd'];
const [first, second, third] = list;
console.log(first);
console.log(second)

// With default values
let first, last, age;
[first, last, age, gender='male'] = ['penta', 'code', 5];
console.log(first, last, age, gender);

// Use with Spread
var [a, b, ...c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

// Swap two numbers
function swap(a, b) {
	return [b, a];
}

let a = 10;
let b = 5;
[a, b] = swap(a, b);
console.log(a, b);

// OR

let a = 10, b = 20;
[b, a] = [a, b];
console.log(a, b);

// Destructuring with Objects
let {name: name} = {name: 'bob'};
// let {name} = {name: 'bob'};
console.log(name);

// Real example
const someFunction = ({
	url: url = '/api/endpoint',
	method: method = 'GET'},
	...rest
) => {
	console.log(`url: ${url}   Method: ${method}    Rest: ${rest}`);
};

someFunction({url: 'www.test.com/api', method: 'POST'}, 'name', 'age', 'location');
