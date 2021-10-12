const { Schema, model } = require('mongoose')

const Rating = new Schema({
    rate: { type: Number, default: 0, required: true }
})

module.exports = model('Rating', Rating)