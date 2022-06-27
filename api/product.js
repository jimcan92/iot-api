const express = require('express');
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        res.json({
            status: 200,
            message: 'Success',
        })
    } catch (e) {
        console.error(error)
        res.status(500).send('Server Error')
    }
})

module.exports = router;