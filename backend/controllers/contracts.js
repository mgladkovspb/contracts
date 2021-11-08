async function list(req, res) {
    const page = req.query.page || 0

    const items = 20
    const result = []
    for (var i = page * items; i < (page * items) + items; i++) {
        result.push(i)
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