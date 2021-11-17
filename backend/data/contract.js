const { Schema, model } = require('mongoose')

const Contract = new Schema({
    ds: { type: Boolean, default: false },
    number: { type: String, index: true },
    contractDate: { type: Date, index: true },
    plannedDate: { type: Date },
    actualDate: { type: Date },
    customer: { type: String },
    city: { type: String },
    sum: { type: Number, default: 0 },
    prepayment: { type: Number, default: 0 },
    profit: { type: Number, default: 0 },
    wage: { type: Number, default: 0 },
    wagePrepayment: { type: Number, default: 0 },
    rigging: { type: Number, default: 0 },
    state: { type: String, default: 'draft' } // draft, delete, accepted
})

module.exports = model('Contract', Contract)