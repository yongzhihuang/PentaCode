// We usually capitalize class names
var Person= function(name) {
	this.name = name;  // public variable
	this._health = 100;  // private variable
	console.log('Person constructor called');

    // class method
	this.walk= function() {
		console.log(this.name + ' is walking')
	}

    // getter
	this.getHealth = function() {
		return this._health;
	}

    // setter
	this.setHealth = function(health) {
		this._health = health;
	}
}

// Create some new persons, note, the `new` keyword is used to invoke a constructor
var joe = new Person('joe');
joe.setHealth(100);
console.log(joe.getHealth()); // 100
joe.walk(); // joe is walking

var alice = new Person('alice');
alice.setHealth(30);
console.log(alice.getHealth()); // 30
alice.walk(); // alice is walking

// Let's create a common method for these people
Person.prototype.sleep= function() {
	console.log(this.name + ' is sleeping');
}

joe.sleep(); // joe is sleeping
alice.sleep(); // alice is sleeping

// Inheritance
// Inheritance
var Criminal = function(name, crime) {
	Person.call(this, name);
	this.crime = 'bank robber';
    console.log('Criminal constructor called');
}


Criminal.prototype = Object.create(Person.prototype);
Criminal.prototype.constructor = Criminal;

// Method override
Criminal.prototype.sleep= function(arg) {
  console.log('Criminals don\'t sleep! They rob banks!');
}

// Add a method ONLY to criminal class
Criminal.prototype.robBank = function() {
	console.log('Criminal is robbing a bank');
}

// Create a Criminal instance
var bob = new Criminal('bob');
bob.sleep(); // this method was overridden, prints out "Criminals don't sleep! They rob banks!"
bob.robBank(); // special method only for Criminal class, prints out "Criminal is robbing a bank"
joe.robBank(); // Error, this method does not exist on Person class, it only exists in Criminal class

