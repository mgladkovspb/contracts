const Router = require('express')
const router = Router()
const controller = require('../controllers/auth')
const verifyToken = require('../middleware/verify-token')

router.post('/signin', controller.signin)
router.get('/verify', verifyToken, controller.verify)

module.exports = router