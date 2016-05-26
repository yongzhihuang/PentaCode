/*******
Author: Yongzhi Huang
Website: https://www.youtube.com/pentacode
Twitter: twitter.com/pentacodevids
01-arrow_functions.js
********/

// Solving lexical "This" with self = this
var myVar = {};

myVar.name = 'pentacode';
myVar.numbers = [1,2,3,4,5];

myVar.printNumbers = function() {
  var self = this;
  this.numbers.forEach(function(number) {
      console.log(self.name + ' counts ' + number);
  });

}
myVar.printNumbers();


// Solving lexical "This" with .bind()
var myVar = {};

myVar.name = 'pentacode';
myVar.numbers = [1,2,3,4,5];

myVar.printNumbers = function() {

  this.numbers.forEach(function(number) {
      console.log(this.name + ' counts ' + number);
  }.bind(this));

}
myVar.printNumbers();

// Solving lexical "This" with ES6 Arrow Function
var myVar = {};

myVar.name = 'pentacode';
myVar.numbers = [1,2,3,4,5];

myVar.printNumbers = function() {
  this.numbers.forEach((number) => {
      console.log(this.name + ' counts ' + number);
  });

}
myVar.printNumbers();



// Arrow function short hand
var myVar = {};

myVar.name = 'pentacode';
myVar.numbers = [1,2,3,4,5];

myVar.printNumbers = function() {
  this.numPlusOne = this.numbers.map((number) => {return number + 1});
  console.log(myVar.numPlusOne);
}

myVar.printNumbers();


// Short hand method
var myVar = {};

myVar.name = 'pentacode';
myVar.numbers = [1,2,3,4,5];

myVar.printNumbers = function() {
  this.numPlusOne = this.numbers.map(number => number + 1);
  console.log(myVar.numPlusOne);
}

myVar.printNumbers();
