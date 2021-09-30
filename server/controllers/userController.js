const ApiError = require('../error/ApiError');
const bcrypt = require('bcryptjs');

const User = require('../models/User')
const Role = require('../models/Role')
class UserController {
    async registration(req, res) {
        try {
            const { username, password } = res.body
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