const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const Contract = new Schema({
    ds: { type: Boolean, default: false },
    number: { type: String, index: true },
    contractDate: { type: Date, index: true },
    plannedDate: { type: Date },
    actualDate: { type: Date },
    customer: { type: String },
    object: { type: String },
    city: { type: String },
    sum: { type: Number, default: 0 },
    prepayment: { type: Number, default: 0 },
    profit: { type: Number, default: 0 },
    wage: { type: Number, default: 0 },
    wagePrepayment: { type: Number, default: 0 },
    rigging: { type: Number, default: 0 },
    state: { type: String, default: 'draft' }, // draft, deleted, accepted
    comment: { type: String, default: '' },
    typeOfWork: { type: String, default: '' },
    estimateAccount: { type: String, default: '' },
    overheads: { type: Number, default: 0 },
    materials: { type: Number, default: 0 },
    originalReceived: { type: Boolean, default: false },
})

Contract.plugin(mongoosePaginate)

module.exports = model('Contract', Contract)