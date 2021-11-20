const { resolve } = require('path')
const history = require('connect-history-api-fallback')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression  = require('compression')
const https = require('https')
const configure = require('./configure')
const app = express()

module.exports = config => {
    const { PORT = 3000 } = process.env

    app.use(helmet())
    app.use(compression())
    app.use(cors())

    configure(app)

    const publicPath = resolve(__dirname, '../dist')
    const staticConf = { maxAge: '1y', etag: false }

    app.use(express.static(publicPath, staticConf))
    app.use('/', history())

    if(args['all-in-one']) {
        app.use('/', express.static(path.join(__dirname, '../frontend/dist')))
        https.createServer({
            key: fs.readFileSync('../backend/wild.abz-1.ru.key'),
            cert: fs.readFileSync('../backend/wild.abz-1.ru.crt')
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