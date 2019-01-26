const path = require('path')
const merge = require('webpack-merge')
const conf = require('./webpack.com')

module.exports = merge(conf, {
    mode: 'production',
    entry: {
        app: [path.resolve(__dirname, '..', 'src/main.js')]
    }
})
