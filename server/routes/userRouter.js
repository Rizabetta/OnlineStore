const Router = require('express')
const router = new Router()
const { check } = require("express-validator")

const userController = require('../controllers/userController')

router.post('/registration', [
    check('username', 'Имя пользователь не может быть пустым').notEmpty(),
    check('password', 'Пароль должен быть больше 4 и менее 10 символов').isLength({ min: 4, max: 10 })
], userController.registration)

router.post('/login', userController.login)
router.get('/auth', userController.check)



module.exports = router