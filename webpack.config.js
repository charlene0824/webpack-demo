var webpack = require('webpack');
module.exports = {
	entry:'./src/index.js',//告诉webpack该文件是app的入口点，这些是主文件，他们在依赖树的顶端
	output:{
		path:'builds',//编译bundle到bundle.js文件放在builds目录下
		filename:'bundle.js',
		publicPath:'builds/'
	},
	// CommonChunk插件的作用就是提取代码中的公共模块，然后将公共模块打包到一个独立的文件汇总去，以便在其他的入口和模块中使用
	// 
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({
			name:"main",//将依赖移入主文件
			chidren:true,//在所有的子文件中查找相同的依赖
			minChunks:2,//当依赖在子文件中出现两次以以上时，提取公共依赖
		})
	],
	//令babel在我们所有的.js结尾的文件上运行，并避免babel运行在第三方代码上
	//loaders既可以有include也可以有exclude，可以是string，regex，一个回调等
	module:{
		loaders:[{
	    test:/\.js/,
	    exclude: 'node_modules/',
	    loader:  'babel',
	    query: {
    		presets: ['es2015']
  		}
		},{
			test:/\.scss/,
			loader:'style!css!sass'
		},{
			test:/\.html/,
			loader:'html'
		}]
	},
resolve: { extensions: ['', '.js', '.jsx'] }
}