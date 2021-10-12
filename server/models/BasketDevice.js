const { Schema, model } = require('mongoose')

const BasketDevice = new Schema({
    deviceid: [{ type: Number, ref: 'Device' }],
    basketis: [{ type: Number, ref: 'Basket' }]
})

module.exports = model('BasketDevice', BasketDevice)
