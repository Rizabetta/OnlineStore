const { Schema, model } = require('mongoose')

const DeviceInfo = new Schema({
    title: { type: String },
    description: { type: String },
    deviceid: { type: String }
})

module.exports = model('DeviceInfo', DeviceInfo)