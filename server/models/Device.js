const { Schema, model } = require('mongoose')

const Device = new Schema({
    name: { type: String, unique: true, required: true },
    price: { type: Number, required: true },
    rating: [{ type: Number, ref: 'Rating' }],
    img: { type: String, required: true },
    typeid: [{ type: String, ref: 'Type' }],
    brandid: [{ type: String, ref: 'Brand' }],
    deviceInfo: [{
        title: [{ type: String }],
        desc: [{ type: String }]
    }]
})

module.exports = model('Device', Device)
