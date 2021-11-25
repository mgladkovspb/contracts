const Router = require('express')
const router = Router()
const controller = require('../controllers/statistics')
const verifyToken = require('../middleware/verify-token')

router.get('/amount', verifyToken, controller.amount)
router.get('/profit', verifyToken, controller.profit)
router.get('/rigging', verifyToken, controller.rigging)
router.get('/wage', verifyToken, controller.wage)

module.exports = router