const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin  // 本地打包上线时候，不要用这个包

const plugins = [
    new OptimizeCssAssetsPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].chunk.css',
    })
]
if( process.env.npm_lifecycle_event === 'build:analyze'){
    plugins.push(new BundleAnalyzerPlugin());
}

const prodConfig = {
    mode: 'production',
    devtool: 'none',
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: plugins,
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].chunk.js',
    }
}

module.exports = prodConfig
