/* 
* @Author: Lyle
* @Date:  2017/8/14 15:07
*/
const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: {                       //进口
        // index './src/index.js',
        app: './src/index.js',
        // print: './src/print.js',
        another:'./src/another-module.js'
    },
    devtool: 'inline-source-map',   //追踪错误与警告
    devServer: {                    //浏览器监听的目录
        contentBase: './dist',
        hot: true
    },
    plugins: [                      //插件

        new CleanWebpackPlugin(['dist']),    //清除没有用的文件
        new htmlWebpackPlugin({              //创建新的html文件
            title: 'Code Splitting'
        }),
         new webpack.HotModuleReplacementPlugin()  //热替换插件
    ],
    output: {                        // 出口
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),

    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            /*{
                test:
                    /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }*/
        ]
    }


}
