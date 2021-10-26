const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/AuthMiddleware')
const roleMiddleware = require('../middleware/RoleMiddleware')

const typeController = require('../controllers/typeController')

router.post('/', typeController.create)
router.get('/', roleMiddleware(['ADMIN']), typeController.getAll)

module.exports = router