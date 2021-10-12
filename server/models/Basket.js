const { Schema, model } = require('mongoose')

const Basket = new Schema({
    userid: [{ type: Number, ref: 'User' }]
})

module.exports = model('Basket', Basket)
