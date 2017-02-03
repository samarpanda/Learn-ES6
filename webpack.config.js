const path = require('path');
const loaders = require('./webpack/loaders')
const plugins = require('./webpack/plugins')
const publicPath = require('./package.json').publicPath

const config = module.exports = {
    context: __dirname,
    entry: {
        async: './src/async.js',
        generators: './src/generators.js',
        vendor: ['babel-polyfill']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: publicPath
    },
    resolve: {
        extensions: ['.js'],
        modules: [
            'src/',
            'node_modules/'
        ]
    },
    module:{
        loaders: [
            loaders.js,
            loaders.html,
            loaders.css
        ]
    },
    plugins: plugins,
    performance:{
        hints: false
    },
    devServer: {
        proxy: {},
        historyApiFallback:{
            index: publicPath
        },
        host: 'localhost',
        port: 8080,
        compress: true,
        open: false
    },
    devtool: 'inline-source-map'
}
