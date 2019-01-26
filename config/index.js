const address = require('address')

const proConf = require('./pro')
const devConf = require('./dev')

module.exports = {
    ip: address.ip(),
    ...(process.env.NODE_ENV === 'development' ? devConf : proConf)
}
