const Contract = require('./contract')

async function newContractNumber() {
    return '00001/21'
}

async function listOfCities() {
    return ['МСК', 'СПБ', 'КЗН']
}

module.exports = {
    newContractNumber,
    listOfCities
}