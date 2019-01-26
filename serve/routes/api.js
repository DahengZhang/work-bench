const connect = require('koa-connect')
const router = require('koa-router')()
const proxy = require('../middleware/proxy-middleware')

router.all(/^\/api/, connect(proxy))

module.exports = router
