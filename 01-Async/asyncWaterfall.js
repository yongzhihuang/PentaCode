var async = require('async');
var GitHubApi = require('github');

var github = new GitHubApi({
	version: '3.0.0'
});

async.waterfall([
	function getUserAvatar(callback) {
		github.search.users({ q:'airbnb' }, function(err, res) {
			if (err) {
				callback(err, null);
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
