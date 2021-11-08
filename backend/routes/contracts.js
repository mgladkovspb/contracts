const Router = require('express')
const router = Router()
const controller = require('../controllers/contracts')

router.get('/', controller.list)
router.get('/:id', controller.findOne)
router.post('/', controller.insertOne)
router.put('/', controller.updateOne)
router.delete('/', controller.deleteOne)

module.exports = router