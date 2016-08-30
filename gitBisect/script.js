$(function() {
	$('.btn-do-something').on('click', function() {
		$('.jumbotron').slideUp(200, function() {
			$('.marketing').fadeOut(200, function() {
				$('.jumbotron-part-two').fadeIn();
			});
		});
	});
});