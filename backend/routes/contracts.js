const Router = require('express')
const router = Router()
const controller = require('../controllers/contracts')
const verifyToken = require('../middleware/verify-token')

router.get('/', /*verifyToken,*/ controller.list)
router.get('/:id', /*verifyToken,*/ controller.findOne)
router.post('/', verifyToken, controller.insertOne)
router.put('/', verifyToken, controller.updateOne)
router.delete('/:id', verifyToken, controller.deleteOne)

router.get('/fn/cities', verifyToken, controller.cities)
router.get('/fn/number', verifyToken, controller.number)

module.exports = router