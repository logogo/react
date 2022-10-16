const webpack = require('webpack');
const path = require('path');
const exec = require("child_process").exec;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
exec('node server.js',function (error, stdout, stderr) {
    if(error){
        console.log(error)
    }
})
const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
	devServer: {
        contentBase: './',
        //contentBase: './dist',
		open: true,
		port: 8080,
        hot: true,
        historyApiFallback: true,
        /*proxy:{
            '/react': 'http://www.dell-lee.com',
            changeOrigin: true
        }*/
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [ 'style-loader', 
                    {
                        loader: 'css-loader',
                        /*options: {
                            modules: true
                        }*/
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin() 
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    }
}

module.exports = devConfig