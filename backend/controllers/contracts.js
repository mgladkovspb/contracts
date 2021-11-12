async function list(req, res) {
    const page = req.query.page || 0

    const items = 10
    const result = []
    for (var i = page * items; i < (page * items) + items; i++) {
        let num = i.toString().padStart(5, '0') + '/21'
        result.push(num)
    }
    res.json(result)
}

async function findOne(req, res) {
    res.json({})
}

async function insertOne(req, res) {
    res.json({})
}

async function updateOne(req, res) {
    res.json({})
}

async function deleteOne(req, res) {
    res.json({})
}

module.exports = {
    list,
    findOne,
    insertOne,
    updateOne,
    deleteOne
}