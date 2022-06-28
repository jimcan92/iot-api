const IotData = require('../models/IotData')

exports.getIotData = async (req, res, next) => {
    try {
        const iotData = await IotData.find();
        console.log(iotData);
        res.status(200).json({
            success: true,
            count: iotData.length,
            data: iotData,
        })
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Server Error" })
    }
}

exports.addIotData = async (req, res, next) => {
    try {
        const iotData = await IotData.create(req.body);
        console.log(iotData);
        res.status(200).json({
            success: true,
            data: iotData,
        })
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Server Error" })
    }
}