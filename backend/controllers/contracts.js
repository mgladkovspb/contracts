const mongoose = require('mongoose')
const Contract = require('../data/contract')
const contractHelper = require('../data/contract.helper')

async function list(req, res) {
    const page = req.query.page || 0
    const items = 10

    try {
        const result = Contract
            .find()
            .sort({ contractDate: -1 })
            .skip(page * items)
            .limit(items)
            .lean()
            .exec()
        res.json(result)
    } catch(error) {
        res.status(500).json([])
        console.log(error)
    }
    // const page = req.query.page || 0

    // const items = 10
    // const result = []
    // for (var i = page * items; i < (page * items) + items; i++) {
    //     let num = i.toString().padStart(5, '0') + '/21'
    //     result.push(num)
    // }
    // res.json(result)
}

async function findOne(req, res) {
    try {
        const exists = await Contract.findOne({
            _id: mongoose.Types.ObjectId(req.params.id) 
        }).lean().exec()
        if(!exists) {
            return res.status(404).json({ message: 'Договор не найден' })
        }
        res.json(exists)
    } catch(error) {
        res.status(500).json({ message: error.message })
        console.log(error)
    }
}

async function insertOne(req, res) {
    try {
        const exists = await Contract.findOne({ number: req.body.number }).exec()
        if(exists) {
            return res.status(403).json({ message: 'Договор с таким номером уже существует' })
        }
        const contract = new Contract({ 
            ...req.body,
            _id: mongoose.Types.ObjectId()
        })
        await contract.save()
        res.json({ message: 'Договор записан' })
    } catch(error) {
        res.status(500).json({ message: error.message })
        console.log(error)
    }
}

async function updateOne(req, res) {
    try {
        const exists = await Contract.findOne({ 
            _id: mongoose.Types.ObjectId(req.body._id) 
        }).exec()
        if(!exists) {
            return res.status(404).json({ message: 'Договор не найден' })
        }
        Object.keys(req.body).forEach((key) => exists[key] = req.body[key])
        await exists.save()
        res.json({ message: 'Договор обновлен' })
    } catch(error) {
        res.status(500).json({ message: error.message })
        console.log(error)
    }
}

async function deleteOne(req, res) {
    try {
        const exists = await Contract.findOne({ 
            _id: req.params.id 
        }).exec()
        if(!exists) {
            return res.status(404).json({ message: 'Договор не найден' })
        }
        exists.state = 'delete'
        await exists.save()
        res.json({ message: 'Договор помечен на удаление' })
    } catch(error) {
        res.status(500).json({ message: error.message })
        console.log(error)
    }
}

async function cities(req, res) {
    try {
        res.json(await contractHelper.listOfCities())
    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error)
    }
}

async function number(req, res) {
    try {
        res.json(await contractHelper.newContractNumber())
    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error)
    }
}

module.exports = {
    list,
    findOne,
    insertOne,
    updateOne,
    deleteOne,
    cities,
    number
}