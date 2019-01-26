const Proxy = require('http-proxy-middleware')

const config = require('../../config')

const proxy = Proxy({
    target: `${config.ip}:${config.port}`,
    pathRewrite: {
        '^/api': '/'
    }
})

module.exports = proxy
