const moment = require('moment')

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
        let str = '' + d.year() + `${d.month()}`.padStart(2, '0')
        range.push(parseInt(str))
    }
    return range
}

const r = generateDateRange(12)
const ids = generateIdsByDate(r.start, 12)
console.log(ids)