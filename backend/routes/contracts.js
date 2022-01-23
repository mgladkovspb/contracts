const Router = require('express')
const router = Router()
const controller = require('../controllers/contracts')
const verifyToken = require('../middleware/verify-token')

router.get('/', verifyToken, controller.list)
router.get('/:id', verifyToken, controller.findOne)
router.post('/', verifyToken, controller.insertOne)
router.put('/', verifyToken, controller.updateOne)
router.delete('/:id', verifyToken, controller.deleteOne)

router.get('/:id/files', verifyToken, controller.files)
router.get('/:cid/files/:fid/download', verifyToken, controller.downloadFile)
router.post('/:id/files', verifyToken, controller.uploadFile)
router.delete('/:id/files', verifyToken, controller.deleteFile)

router.get('/fn/cities', verifyToken, controller.cities)
router.get('/fn/number', verifyToken, controller.number)
router.get('/fn/customers', verifyToken, controller.customers)
router.get('/fn/objects', verifyToken, controller.objects)

module.exports = router