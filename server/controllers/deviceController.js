const uuid = require('uuid')
const path = require('path');
const { Device } = require('../models/Device')
const { DeviceInfo } = require('../models/DeviceInfo')

const ApiError = require('../error/ApiError');

class DeviceController {
    async create(req, res, next) {
        try {
            const { name, price, brandid, typeid } = req.body
            const { img } = req.files
            const fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({ name, price, brandid, typeid, rating: 0, img: fileName });

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {

    }

    async getOne(req, res) {

    }
}

module.exports = new DeviceController()