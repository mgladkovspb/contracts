const contracts = require('./contracts')
const statistics = require('./statistics')

module.exports = (app) => {
    // api
    app.use('/api/contracts',  contracts)
    app.use('/api/statistics', statistics)
}