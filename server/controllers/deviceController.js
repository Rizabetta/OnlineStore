const uuid = require('uuid')
const path = require('path');
const Device = require('../models/Device')
const DeviceInfo = require('../models/DeviceInfo')

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
        let { brandid, typeid, limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices;
        if (!brandid && !typeid) {
            devices = await Device.find().limit(Number(limit)).skip(Number(offset))
        }
        if (brandid && !typeid) {
            devices = await Device.find({ brandid }).limit(Number(limit)).skip(Number(offset))
        }
        if (!brandid && typeid) {
            devices = await Device.find({ typeid }).limit(Number(limit)).skip(Number(offset))
        }
        if (brandid && typeid) {
            devices = await Device.find({ typeid, brandid }).limit(Number(limit)).skip(Number(offset))
        }

        let findcount = await Device.countDocuments().then((count) => {
            return count
        })

        let obj = {
            count: findcount,
            rows: devices
        };
        //console.log(typeof (obj.count))
        return res.json(obj)
        // /device?brandid=NECA&limit=1&page=3 
    }

    async getOne(req, res) {
        const { id } = req.params
        const device = await Device.findOne(
            {
                _id: id,
                include: [{ model: DeviceInfo, as: 'info' }]
            },
        )
        return res.json(device)
        //  /device/61782491bff237058863e062
    }
}

module.exports = new DeviceController()