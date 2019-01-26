const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    output: {
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [{
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        }, {
            test: /\.(c|sa|sc)ss$/,
            exclude: /node_modules/,
            use: ['vue-style-loader', 'css-loader', 'sass-loader']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ]
}
