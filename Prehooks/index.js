var myFunction = function() {
	var num;
	if (num === 10) {
		console.log('The number is 10');
	}

	while (num !== 10) {
		doSomething();
	}

	function doSomething() {
		console.log('do something');
	}

	console.log('hello world');
};
