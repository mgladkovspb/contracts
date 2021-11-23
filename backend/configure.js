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
    global.jwtkey = crypto.randomBytes(48).toString('hex')
    app.use(express.json({ limit: '50mb' }))
    routes(app)
}