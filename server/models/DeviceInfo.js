const { Schema, model } = require('mongoose')

const DeviceInfo = new Schema({
    title: { type: String },
    description: { type: String },
    deviceid: [{ type: Number, ref: 'Device' }]
})

module.exports = model('DeviceInfo', DeviceInfo)