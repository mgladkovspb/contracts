const { resolve } = require('path')
const history = require('connect-history-api-fallback')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression  = require('compression')
const https = require('https')
const configure = require('./configure')
const app = express()

module.exports = options => {
    const PORT = options.port || 3000

    app.use(helmet())
    app.use(compression())
    app.use(cors())

    configure(app)

    const publicPath = resolve(__dirname, '../dist')
    const staticConf = { maxAge: '1y', etag: false }

    app.use(express.static(publicPath, staticConf))
    app.use('/', history())

    if(options.usessl) {
        app.use('/', express.static(path.join(__dirname, '../frontend/dist')))
        https.createServer({
            key: fs.readFileSync(options.cert.key),
            cert: fs.readFileSync(options.cert.file)
        }, app)
        .listen(PORT, () => {
            console.log(`HTTPS: App run on ${PORT} port.`)
        })
    } else {
        app.listen(PORT, () => {
            console.log(`Server started at port: ${PORT}`)
        })
    }
}