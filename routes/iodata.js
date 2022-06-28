const express = require('express');
const router = express.Router()

const { getIotData, addIotData } = require('../controllers/iotdata')

router.route('/').get(getIotData).post(addIotData)

module.exports = router;