const config = require('./config')

module.exports = {
    files: [
        'views/*',
        'public/*'
    ],
    proxy: `localhost:${config.port}`
}
