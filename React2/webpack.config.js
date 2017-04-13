

// entry  ：打包的入口文件  可以是一个 字符串 也可以是一个对象
// output： 配置打包的结果    是一个对象
//path：   打包后的路径
// filename : 指定打包后的名称
// module ：定义了对模块的处理逻辑
// loaders：定义了一系列的加载器 可以是数组

var path = require("path");
module.exports = {
	entry:{
		build:"./app/index.js"
	},
	output:{
		path:"./build/",
		filename:"[name].js"
	},
	module:{
		loaders:[
			{
				test:/.css$/,
				loaders:["style","css"],
				 exclude:"/node_modules/"
			},
			{
				test:/.js$/,
//      loaders:["babel-loader"],
        loaders:['babel?presets[]=es2015&presets[]=react'],
				exclude:"/node_modules/",
				include:path.resolve(__dirname,"app")
			}
		]
	},
	resolve:{
		extensions:['','.js',".css",'jsx']  //自动补全识别后缀
	}
}
