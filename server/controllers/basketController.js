const Basket = require("../models/Basket")

class BasketController {
    async create(req, res) {
        const { userid, deviceid } = req.body
        const basket = await Basket.create({ userid, deviceid })
        return res.json(basket)
    }

    async getAll(req, res) {
        const baskets = await Basket.find()
        return res.json(baskets)
    }

    async getOne(req, res) {
        const { id } = req.params
        const basket = await Basket.findOne(
            {
                _id: id
            },
        )
        return res.json(basket)
        //  /basket/61782491bff237058863e062
    }
}

module.exports = new BasketController()