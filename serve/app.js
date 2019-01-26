const path = require('path')
const Koa = require('koa')
const static = require('koa-static')
const render = require('koa-art-template')
const connect = require('koa-connect')
const webpack = require('webpack')
const devMiddleware = require('./middleware/dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')

const app = new Koa()
const config = require('../config')
const webpackConf = require('../config/webpack.config')
const compiler = webpack(webpackConf)
const index = require('./routes/index')

app.use(static(path.resolve(__dirname, '..', 'public')))
    .use(devMiddleware(compiler, {
        publicPath: webpackConf.output.publicPath
    }))
    .use(connect(hotMiddleware(compiler)))

render(app, {
    root: path.resolve(__dirname, '..', 'views'),
    extname: '.html'
})

app.use(index.routes(), index.allowedMethods())

app.listen(config.port || 3000)
