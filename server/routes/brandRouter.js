const Router = require('express')
const router = new Router()

const roleMiddleware = require('../middleware/RoleMiddleware')
const brandController = require('../controllers/brandController')

router.post('/', roleMiddleware(['ADMIN']), brandController.create) //создать бренд
router.get('/', brandController.getAll)

module.exports = router