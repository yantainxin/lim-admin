var webpack = require('webpack');
var path = require('path')//node.js内置的package，用来处理路径的。
var projectRoot = path.resolve(__dirname, '../')//定义项目的根目录，__dirname表示当前文件的路径

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
    entry: {
        pc: projectRoot + '/lim/entry.pc.js',
        h5: projectRoot + '/lim/entry.h5.js',
        wx: projectRoot + '/lim/entry.wx.js'
    },
    output: {
        path: path.resolve(__dirname, 'D:/WorkSpaces/Lim/src/main/webapp/static/js'),  //D:/WorkSpaces/Lim/src/main/webapp/static/js
        // __dirname + '/bundle',
        filename: 'lim.[name].js',
        publicPath: '/'  //启动本地服务后的根目录
    },
    module: {
        loaders: [//加载器
            // {
            //     test: /\.css$/, 
            //     loader: 'style-loader!css-loader'
            // },
            // {
            //     test: /\.vue$/,
            //     loader: 'vue'
            // },
            // {
            //     test: /\.(woff|eot|ttf|otf|svg)(\?.*)?$/,
            //     loader: 'url-loader'
            // },
            // {
            //     test: /\.js$/,
            //     loader: 'babel',
            //     include: [
            //       path.join(projectRoot, 'src')
            //     ],
            //     exclude: /node_modules/
            // },
            // {  test: /\.js$/,
            //      loader: "babel-loader",
            //      query: {presets: ['es2015']},
            //      exclude: /node_modules/
            // },
            // {
            //     test: /\.json$/,
            //     loader: 'json'
            // }
    ]
    },
　　resolve: {
    　　alias: {
    　　    'vue$': 'vue/dist/vue.common.js'
   　　 }
　　},
   devServer: {
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port:8080
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
    ]
}