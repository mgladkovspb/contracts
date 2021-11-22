const contracts = require('./contracts')
const statistics = require('./statistics')
const auth = require('./auth')

module.exports = (app) => {
    // api
    app.use('/api/contracts',  contracts)
    app.use('/api/statistics', statistics)
    app.use('/api/auth', auth)
}