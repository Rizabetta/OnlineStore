const { Schema, model } = require('mongoose')

const Basket = new Schema({
    userid: { type: String, required: true },
    deviceid: { type: String, required: true }
})

module.exports = model('Basket', Basket)