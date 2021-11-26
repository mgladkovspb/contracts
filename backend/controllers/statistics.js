const moment = require('moment')
const Contract = require('../data/contract')

const generateDateRange = months => {
    return {
        start: moment().add(months * (-1), 'month').startOf('month').toDate(),
        end: moment().endOf('month').toDate()
    }
}

const generateLabels = months => {
    const labels = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    const indexes = []

    let index = moment().month() - (months - 1)
    if(index < 0) index = 12 + index
    for(let i = 0; i < months; i++) {
        indexes.push(index)
        if(index >= 11) index = 0
        else index++
    }

    return indexes.map(val => labels[val])
}

const generateIdsByDate = (start, count) => {
    let range = []
    for (let i = 1; i < count + 1; i++) {
        let d = moment(start).add(i, 'month')
        let str = '' + d.year() + `${d.month() + 1}`.padStart(2, '0')
        range.push(parseInt(str))
    }
    return range
}

const aggregation = async (months, field) => {
    const range = generateDateRange(months)
    const result = {
        labels: generateLabels(months),
        data: []
    }

    const ids = generateIdsByDate(range.start, months)

    try {
        const query = await Contract.aggregate()
            .match({ 
                state: 'accepted',
                contractDate: { 
                    $gte: range.start, 
                    $lt: range.end
                } 
            })
            .group({ 
                _id: { 
                    year: { $year: { date: '$contractDate', timezone: '+03' } }, 
                    month: { $month: { date: '$contractDate', timezone: '+03' } }
                },
                sum: { $sum: `$${field}` }
            })
            .exec()
        const temp = query.map((item) => {
            return {
                id: parseInt('' + item._id.year + `${item._id.month}`.padStart(2, '0')),
                sum: item.sum
            }
        })
        temp.sort((a, b) => a.id - b.id)
        result.data = ids.map((id) => {
            let found = temp.find(item => item.id == id)
            return (!found) ? 0 : found.sum
        })
    } catch (error) {
        console.log(error)
    }

    return result
}

async function amount(req, res) {
    res.json(await aggregation(12, 'sum'))
}

async function wage(req, res) {
    res.json(await aggregation(6, 'wage'))
}

async function profit(req, res) {
    res.json(await aggregation(12, 'profit'))
}

async function rigging(req, res) {
    res.json(await aggregation(6, 'rigging'))
}

module.exports = {
    amount,
    wage,
    profit,
    rigging
}