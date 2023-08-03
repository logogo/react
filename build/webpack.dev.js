const webpack = require('webpack');
const path = require('path');

const devConfig = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
            directory: './'
        },
        open: true,
        hot: 'only',
        port: 8080,
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
                            modules: {
                                localIdentName: '[path][name]-[local]-[hash:5]'
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['autoprefixer']
                            }
                        }
                    },
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/, // node_modules下的less文件不使用模块化
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]-[local]-[hash:5]'
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                          postcssOptions: {
                            plugins: ['autoprefixer']
                          }
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
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
