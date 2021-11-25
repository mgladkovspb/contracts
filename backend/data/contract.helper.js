const Contract = require('./contract')

async function newContractNumber() {
    const nlen = 6
    let result = '---'
    try {
        const now = new Date()
        const last = await Contract.findOne({ ds: false }, 'number')
            .sort({ contractDate: -1 }).lean().exec()
        console.log(last)
        if(!last) {
            result = `${'1'.padStart(nlen, '0')}/${now.getFullYear()}`
        } else {
            let temp = last.number.replace(/\/\d{4}/, '')
            int = parseInt(temp, 10)
            if(Number.isInteger(int)) {
                int++;
                temp = int.toString()
                result = `${temp.padStart(nlen, '0')}/${now.getFullYear()}`
            }
        }
    } catch (error) {
        console.log(error)
    }
    return result
}

async function listOfCities() {
    let result = []

    try {
        const group = await Contract.aggregate()
            .group({ _id: '$city' }).exec()
        result = group.map(item => item._id)
    } catch (error) {
        console.log(error)
    }

    return result
}

async function listOfCustomers() {
    let result = []

    try {
        const group = await Contract.aggregate()
            .group({ _id: '$customer' }).exec()
        result = group.map(item => item._id)
    } catch (error) {
        console.log(error)
    }

    return result
}

async function listOfObjects() {
    let result = []

    try {
        const group = await Contract.aggregate()
            .group({ _id: '$object' }).exec()
        result = group.map(item => item._id)
    } catch (error) {
        console.log(error)
    }

    return result
}

module.exports = {
    newContractNumber,
    listOfCities,
    listOfCustomers,
    listOfObjects
}