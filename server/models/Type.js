const { Schema, model } = require('mongoose')

const Type = new Schema({
    name: { type: String, unique: true, required: true }
})

module.exports = model('Type', Type)