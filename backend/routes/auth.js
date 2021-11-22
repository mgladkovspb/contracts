const Router = require('express')
const router = Router()
const controller = require('../controllers/auth')

router.post('/signin', controller.signin)

module.exports = router