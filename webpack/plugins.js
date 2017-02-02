const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isProduction = (process.env.NODE === 'production')
const publicPath = require('../package.json').publicPath || ""

const basePlugin = [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
        hash: true,
        minify: !isProduction ? false : {
            collapseWhitespace: true,
            removeAttributeQuotes: true
        }
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        '__DEV__': !isProduction,
        '__PUBLICPATH__': JSON.stringify(publicPath)
    })
]

const productionPlugins = [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
]

module.exports = basePlugin.concat(isProduction ? productionPlugins : [])