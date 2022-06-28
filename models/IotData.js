const mongoose = require('mongoose')

const IotDataSchema = new mongoose.Schema({
    deviceId: String,
    buildingName: String,
    roomName: String,
    temp: Number,
    humd: Number,
    createdAt: Date,
})

module.exports = mongoose.model('IotData', IotDataSchema)