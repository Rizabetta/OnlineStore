const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/AuthMiddleware')
const roleMiddleware = require('../middleware/RoleMiddleware')

const typeController = require('../controllers/typeController')

router.post('/', roleMiddleware(['ADMIN']), typeController.create)
router.get('/', typeController.getAll)

module.exports = router