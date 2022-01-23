const { Schema, model } = require('mongoose')

const Attachment = new Schema({
    contract: { type: Schema.Types.ObjectId, ref: 'Contract' },
    name: { type: String, default: '', index: true },
    type: { type: String, string: '' },
    date: { type: Date },
    size: { type: Number, default: 0 },
    data: { type: String }
})

module.exports = model('Attachment', Attachment)