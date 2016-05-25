/*******
Author: Yongzhi Huang
Website: https://www.youtube.com/pentacode
Twitter: twitter.com/pentacodevids
04-rest_and_spread_operators.js
********/

// Spread Operator
let dietSodas = ['diet coke', 'diet pepsi', 'diet sprite'];
let sodas = ['coke', ...dietSodas, 'sunkist', 'mountain dew'];
console.log(sodas);	// ["coke", "diet coke", "diet pepsi", "diet sprite", "sunkist", "mountain dew"]


function sumOfThreeValues(a, b, c) {
	return a + b + c;
}

let numberList = [1, 2, 3];
console.log(sumOfThreeValues(...numberList));	// 6


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

arr1.push(...arr2);
console.log(arr1);	// [1, 2, 3, 4, 5, 6]


// Rest Parameter
// ES5
function parameterLogger() {
	return Array.prototype.slice.call(arguments, parameterLogger.length);
}

let params = parameterLogger(1,2,3,4,5);
console.log(params);

// ES6 with Rest parameter
function parameterLogger(...args) {
	// args is an array of all the arguments provided to the function
	return args;
}

let params = parameterLogger(1,2,3,4,5);
console.log(params);

// Make functions easier to write
function adder(numToAdd, ...args) {
	return args.map((arg) => numToAdd + arg);
}

var ans = adder(1,2,3);	// [3, 4]
console.log(ans);
