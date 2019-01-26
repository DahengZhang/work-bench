const path = require('path')
const merge = require('webpack-merge')
const conf = require('./webpack.com')

module.exports = merge(conf, {
    mode: 'development',
    entry: {
        app: ['webpack-hot-middleware/client?noInfo=true&reload=true', path.resolve(__dirname, '..', 'src/main.js')]
    }
})
