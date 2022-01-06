const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const crypto = require('crypto')

module.exports = async app => {
    const isDevServer = process.env.WEBPACK_DEV_SERVER
    
    if(isDevServer) {
        mongoose.set('debug', true)
        await mongoose.connect('mongodb://localhost:27017/contract', { 
            useNewUrlParser:true,
            useUnifiedTopology: true,
            autoIndex: false,
        })
    }
    //global.jwtkey = crypto.randomBytes(48).toString('hex')
    global.jwtkey = '1df60c852f59ef1865f1382a9efce836c50d10abe943b10fc4d6a914c107c8a25df6d340935f1d0effcfab31d2b7138f'
    app.use(express.json({ limit: '50mb' }))
    routes(app)
}