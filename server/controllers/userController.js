const ApiError = require('../error/ApiError');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator')

const User = require('../models/User')
const Role = require('../models/Role')
class UserController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Ошибка при регистрации", errors })
            }

            const { username, password } = req.body
            const candidate = await User.findOne({ username })

            if (candidate) {
                return res.status(404).json({ message: "Пользователь с таким именем уже существует" })
            }

            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({ value: "USER" })
            const user = new User({ username, password: hashPassword, roles: [userRole.value] })
            await user.save()
            return res.json({ message: "Пользователь зарегистрирован" })
        } catch (e) {
            console.log(e)
            res.status(4000).json({ message: 'Registration error' })
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body
            const user = await User.findOne({ username })
            if (!user) {
                res.status(4000).json({ message: `Пользователь ${username} не найден` })
            }
            const validPassword = bcrypt.compareSync(password, user.password) //хешированный пароль берем из базы данных
            if (!validPassword) {
                res.status(4000).json({ message: `Введен неверный пароль` })
            }
        } catch (e) {
            console.log(e)
            res.status(4000).json({ message: 'Login error' })
        }
    }

    async check(req, res, next) {
        try {
            res.json('serwer work')
            /*const { id } = req.query
            if (!id) {
                return next(ApiError.badRequest('не задан id'))
            }
            res.json(id);*/
        } catch (e) {

        }
    }
}

module.exports = new UserController()