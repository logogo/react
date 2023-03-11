const webpack = require('webpack');

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './',
        open: true,
        port: 8080,
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: /node_modules/, // node_modules下的less文件不使用模块化
                use: ['style-loader',
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/, // node_modules下的less文件不使用模块化
                use: ['style-loader',
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
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    }
};

module.exports = devConfig;
