var path = require("path");
var webpack = require( "webpack" );

module.exports = {
	entry:'./js/app.jsx',
	output:{
		path:path.join( __dirname,"js" ),
		filename:"bundle.js"
	},
	// plugins:[
	// 	new webpack.optimize.UglifyJsPlugin({
	// 		compressor:{
	// 			warnings:false
	// 		}
	// 	})
	// ],
	module:{
		loaders:[{
			test:/\.js|jsx$/,
			//loader:'jsx?harmony'
			loader:'jsx'
		},{
			test:/\.css$/,
			loaders:['style','css']
		}]
	}
}