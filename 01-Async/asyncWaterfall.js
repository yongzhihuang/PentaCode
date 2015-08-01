var async = require('async');
var GitHubApi = require('github');

var github = new GitHubApi({
	version: '3.0.0'
});


async.series([
	function funcOne(callback) {
		callback(null, 'Function one');
	},
	function funcTwo(callback) {
		setTimeout(function() {
			callback(null, 'Function two');
		}, 2000);
	},
	function funcThree(callback) {
		callback(null, 'Function three');
	}
], function(err, result) {
	if (err) {
		console.error(err);
		return;
	}

	console.log(result);
});


async.waterfall([
	function getUserAvatar(callback) {
		github.search.users({ q:'airbnb' }, function(err, res) {
			if (err) {
				callback(err, null);
				return;
			}
			var avatarUrl = res.items[0].avatar_url;
			callback(null, avatarUrl);
		});
	},
	function wrapAvatarInHtml(avatarUrl, callback) {
		var avatarWithHtml = '<img src="' + avatarUrl + '"/>';
		callback(null, avatarWithHtml);
	}
], function(err, result) {
	if (err) {
		console.error(err);
		return;
	}
	console.log(result);
});
