const { Schema, model } = require('mongoose')

const Device = new Schema({
    name: { type: String, unique: true, required: true },
    price: { type: Number, required: true },
    rating: [{ type: Number, ref: 'Rating' }],
    img: { type: String, required: true },
    typeid: [{ type: Number, ref: 'Type' }],
    brandid: [{ type: Number, ref: 'Brand' }]
})

module.exports = model('Device', Device)
