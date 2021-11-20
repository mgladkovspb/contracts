const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

module.exports = async app => {
    mongoose.set('debug', true)
    await mongoose.connect('mongodb://localhost:27017/contract', { 
        useNewUrlParser:true,
        useUnifiedTopology: true,
        autoIndex: false,
    })

    app.use(express.json({ limit: '50mb' }))
    routes(app)
}