$(function() {

	// Default settings
	var DEFAULT_POLLING_TIME = 2000;
	var MAX_REQ_TIMEOUT_TIME = 1000;
	var TIMEOUT_THRESHOLD = 30000;

	// Whenever the page loads, override the polling time with the default
	localStorage.pollTime = DEFAULT_POLLING_TIME;


	function polling() {
		// To track the time when the request starts
		var startTime = new Date().getTime();

		// For use in the .always() callback
		var pollTime = localStorage.pollTime;

		$.ajax('data.json')
	  .done(function(data, status, xhr) {

	  	// How long did our request took
	  	var requestTime = new Date().getTime() - startTime;
			
	  	// Uncomment to simulate server response timeouts
			requestTime = Math.floor(Math.random() * 6) + 996;

			// The meat, if the request took too long, and the current stored pollTime is less than the threshold, then set the pollTime to whatever it is times two.  If it's over than timeout threshold, then max it out at the threshold.
			if (requestTime >= MAX_REQ_TIMEOUT_TIME) {
			    if (localStorage.pollTime <= TIMEOUT_THRESHOLD) {
			        localStorage.pollTime = localStorage.pollTime * 2;
			    } else {
			        localStorage.pollTime = TIMEOUT_THRESHOLD;
			    }
			    $('body').append('<h2 style="color: red">Bad Request: (' + requestTime + 'ms), extending interval: ' + localStorage.pollTime + '</h2>');
			    xhr.abort();
			    return;
			}

	  	var result = JSON.parse(data);
	  	$('body').append('<h2 style="color: green">Good Request (' + requestTime + 'ms)' + ', Use same interval: ' + localStorage.pollTime + '</h2>');
	  })
	  .fail(function(error) {
	    // apply the backoff alg here too...
	    //
	  })
	  .always(function () {
	  	// This will make the app call polling indefinitely
      setTimeout(polling, pollTime);
    });;
	}

	// Start everything off here
	polling();
});