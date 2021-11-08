const { Schema, model } = require('mongoose')

const Contract = new Schema({
    action: { type: String, index: true },
    date: Date,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = model('Action', Action)