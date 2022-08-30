const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
    target: 'web',
    mode: 'development',
    watch: true,
    target: 'web',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: false,
        historyApiFallback: true,
        hot: true,
        port: 3030,
    },
    plugins: [
        ...common.plugins,
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
    ],
})
