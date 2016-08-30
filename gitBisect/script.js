$(function() {
	$('.btn-do-something').on('click', function() {
		$('.jumbotrosn').slideUp(200, function() {
			$('.marketings').fadeOut(200, function() {
				$('.jumbotron-part-twos').fadeIn();
			});
		});
	});
});