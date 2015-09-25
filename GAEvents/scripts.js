$(function() {
	$('a').on('click', function(e) {

		//for our example, we'll prevent default click behavior
		e.preventDefault();
		var $e = $(e.currentTarget);

		var category = $e.attr('data-gaCategory');
		var action = $e.attr('data-gaAction');
		var label = $e.attr('data-gaLabel');

		console.log(category, action, label);
		if (category && action && label) {
			ga('send', 'event', category, action, label, null);
		}

	});

	//Buy item button
	$('.btn-buy').on('click', function(e) {
		//for our example, we'll prevent default click behavior
		e.preventDefault();
		var $e = $(e.currentTarget);
		var category = $e.attr('data-gaCategory');
		var action = $e.attr('data-gaAction');
		var label = $e.attr('data-gaLabel');
		var value = parseInt($e.attr('data-gaValue'), 10);

		console.log(category, action, label, value);
		if (category && action && label && value) {
			ga('send', 'event', category, action, label, value);
		}

	});
})
