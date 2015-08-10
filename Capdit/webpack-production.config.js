var fs = require('fs');
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var cssExtractTextPlugin = new ExtractTextPlugin("main-[hash].css");

// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var definePlugin = new webpack.DefinePlugin({
    "process.env": {
        "NODE_ENV": JSON.stringify('production'),
        "CLIENT": 'true',
        "SERVER": 'false'
    }
});

module.exports = {
	resolve: {
	    extensions: ['', '.js']
	},

	entry: [
	    './src/scripts/index'
	],
	output: {
	    path: path.join(__dirname, '/static/public/build'),
	    filename: 'bundle.js'
	},
	module: {
	    loaders: [
	        { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src') },
	        { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap', include: path.join(__dirname, 'src/scss')},
	        { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap', include: path.join(__dirname, 'src/scss')},
	    ]
	},
	plugins: [
		definePlugin,
		new webpack.optimize.OccurenceOrderPlugin(true),
		cssExtractTextPlugin,
		new webpack.optimize.UglifyJsPlugin({
		    beautify: true,
		    verbose: false
		}),
		function () {
		    this.plugin("done", function (stats) {
		        var jj = stats.toJson({
		            errorDetails: false,
		            reasons: false,
		            source: false,
		            chunks: false,
		            modules: false,
		            children: false
		        });
		    });
		}
	]
};
