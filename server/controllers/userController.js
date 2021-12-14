const ApiError = require('../error/ApiError');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator')

const User = require('../models/User')
const Role = require('../models/Role')
const { secret } = require('../config')

const generateAccessToken = (id, roles, usernsme) => {
    const payload = {
        id,
        roles,
        usernsme
    }
    return jwt.sign(payload, secret, { expiresIn: '24h' })
}

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
            const token = generateAccessToken(user._id, user.roles, user.username)
            return res.json({ token })
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
            const token = generateAccessToken(user._id, user.roles, user.username)
            return res.json({ token })
        } catch (e) {
            console.log(e)
            res.status(4000).json({ message: 'Login error' })
        }
    }

    async check(req, res, next) { //перезапись токена
        const token = generateAccessToken(req.user.id, req.user.role, req.user.username)
        return res.json({ token })
    }
}

module.exports = new UserController()