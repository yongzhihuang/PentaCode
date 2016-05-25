var myFunction = function() {
	var num = 0;

	//curly: This option requires you to always put curly braces around blocks in loops and conditionals. JavaScript allows you to omit curly braces when the block consists of only one statement, for example:
	while (num !== 10) {
		doSomething();
	}

	function doSomething() {
		console.log('do something');
	}

	//eqeqeq: This options prohibits the use of == and != in favor of === and !==. The former try to coerce values before comparing them which can lead to some unexpected results. The latter don't do any coercion so they are generally safer.
	if (num === 10) {
		console.log('The number is 10');
	}

	//latedef: This option prohibits the use of a variable before it was defined. JavaScript has function scope only and, in addition to that, all variables are always moved—or hoisted— to the top of the function. This behavior can lead to some very nasty bugs and that's why it is safer to always use variable only after they have been explicitly defined.
	var badVar;
	badVar = 'bird';

	//evil: This option suppresses warnings about the use of eval. The use of eval is discouraged because it can make your code vulnerable to various injection attacks and it makes it hard for JavaScript interpreter to do certain optimizations.
	var x = 10;
	var y = 20;
	var a = String(x * y) + "<br>";
	var b = String(2 + 2) + "<br>";
	var c = String(x + 17) + "<br>";
	var res = a + b + c;

	//noarg: This option prohibits the use of arguments.caller and arguments.callee. Both .caller and .callee make quite a few optimizations impossible so they were deprecated in future versions of JavaScript. In fact, ECMAScript 5 forbids the use of arguments.callee in strict mode.
	// function whoCalled() {
	//    if (arguments.caller == null)
	//       console.log('I was called from the global scope.');
	//    else
	//       console.log(arguments.caller + ' called me!');
	// }

	// [1,2,3,4,5].map(function (n) {
	//     return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
	// });

	//undef: This option prohibits the use of explicitly undeclared variables. This option is very useful for spotting leaking and mistyped variables.
	var myUndefinedVar = 'foo';
	badVar = myUndefinedVar;

	//eqnull: This option suppresses warnings about == null comparisons. Such comparisons are often useful when you want to check if a variable is null or undefined.
	var z = 13;
	if (!z) {
		console.log('z is null');
	}

	//node: This option defines globals available when your code is running inside of the Node runtime environment. Node.js is a server-side JavaScript environment that uses an asynchronous event-driven model. This option also skips some warnings that make sense in the browser environments but don't make sense in Node such as file-level use strict pragmas and console.log statements.
};
