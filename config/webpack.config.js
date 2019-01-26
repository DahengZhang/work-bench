const devConf = require('./webpack.dev')
const proConf = require('./webpack.pro')

module.exports = process.env.NODE_ENV === 'development'
                    ? devConf : proConf
