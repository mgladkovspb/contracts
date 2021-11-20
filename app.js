const minimist = require('minimist')
const express = require('express')
const routes = require('./backend/routes')
const mongoose = require('mongoose')

const args = minimist(process.argv.slice(2))

console.log(args)

if (require.main === module) {
    console.log('called directly');
} else {
    console.log('required as a module');
}

mongoose.set('debug', true)
mongoose.connect("mongodb://localhost:27017/contract", { 
    useNewUrlParser:true,
    useUnifiedTopology: true,
    autoIndex: false,
}).then(() => {
    console.log('connected')
})

// (async () => {
//     try {
//         mongoose.set('debug', true)
//         await mongoose.connect("mongodb://localhost:27017/contract", { 
//             useNewUrlParser:true,
//             useUnifiedTopology: true,
//             autoIndex: false,
//         })

//     } catch (e) {
//         // Deal with the fact the chain failed
//     }
// })()

module.exports = () => {
    console.log('lkjlkj')
}