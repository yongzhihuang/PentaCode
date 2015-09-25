var async = require('async');
var _ = require('lodash');
var $ = require('jquery')(require("jsdom").jsdom().parentWindow);

//Returns top image from Flickr for a tag
function getFlickrImage(tag, callback) {
	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	$.getJSON( flickerAPI, {
		tags: tag,
		tagmode: 'any',
		format: 'json'
	})
	.done(function(data) {
		var items = data.items;
		callback(null, items[0].media.m);	
	});
}

//List of tags we want to search on Flickr
var tags = [
	'alistar',
	'blitzcrank',
	'caitlyn'
];

//==================================BAD========================================
//We want to loop through each tags and get top image from Flickr and push that result to an array call imageList
//but this is done with synchronous loop with async functions mixed within, what's wrong with this?
// var imageList = [];
// _.each(tags, function(tag) {
// 	var image = {};
// 	image.tag = tag;
// 	getFlickrImage(tag, function(err, url) {
// 		if (err) {
// 			console.error(err);
// 			return;
// 		}
// 		if (url) {
// 			image.url = url;
// 			imageList.push(image);
// 			console.log(image);
// 		}
// 	});
// });
// console.log('Image List: ', imageList);



//==================================async.each========================================
//each(arr, iterator, [callback])
// var imageList = [];
// async.each(tags, function(tag, callback) {
// 	var image = {};
// 	image.tag = tag;
// 	getFlickrImage(tag, function(err, url) {
// 		if (err) {
// 			callback(err);
// 			return;
// 		}
// 		if (url) {
// 			image.url = url;
// 			imageList.push(image);
// 			callback();
// 		}
// 	});
// }, function(err) {
// 	if (err) {
// 		console.log('one of the api failed, the whole thing will fail now');
// 	} else {
// 		console.log('Image List', imageList);
// 	}
// });

//==================================async.forEachOf========================================
//each(arr, iterator, [callback])
var imageList = [];
var tags = {
	tag_a: 'alistar',
	tag_b: 'blitzcrank',
	tag_c: 'caitlyn'
};

async.forEachOf(tags, function(value, key, callback) {
	var image = {};
	getFlickrImage(value, function(err, url) {

		if (err) {
			callback(err);
			return;
		}
		if (url) {
			image.tag = value;
			image.url = url;
			imageList.push(image);
			callback();
		}
	});
}, function(err) {
	if (err) {
		console.log('one of the api failed, the whole thing will fail now');
	} else {
		console.log('Image List', imageList);
	}
});

