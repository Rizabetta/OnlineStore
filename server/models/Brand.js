const { Schema, model } = require('mongoose')

const Brand = new Schema({
    name: { type: String, unique: true, required: true }
})

module.exports = model('Brand', Brand)