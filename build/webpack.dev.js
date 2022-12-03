const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin  // 本地打包上线时候，不要用这个包

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
        // new BundleAnalyzerPlugin() 
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    }
}

module.exports = devConfig