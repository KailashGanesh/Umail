const path = require('path')
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const loader = require('sass-loader')
const CopyPlugin = require("copy-webpack-plugin")

// const autoprefixer = require("autoprefixer");

module.exports = {
    mode:'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool:'source-map',
    devServer:{
        static: {directory:path.resolve(__dirname,'dist')},
        port:3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules:[
            {
                test:/\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ],
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'webpack App',
            filename:'index.html',
            template: 'src/template.html',
        }),
        new CopyPlugin({patterns:[{from: './src/assets/sprite.svg', to:''},{from: './src/assets/img', to:'./img'}]})
    ]
}