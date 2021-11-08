const Router = require('express')
const router = Router()
const controller = require('../controllers/statistics')

router.get('/st1', controller.st1)

module.exports = router