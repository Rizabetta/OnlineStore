const Brand = require("../models/Brand")

class BrandController {
    async create(req, res) {
        const { name } = req.body
        const brand = await Brand.create({ name })
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.find()
        return res.json(brands)
    }
}

module.exports = new BrandController()