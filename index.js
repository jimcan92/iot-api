const express = require('express');
const app = express();
const product = require('./api/product');

app.use(express.json({ extended: false }))
app.use('/api/v1/product', product)

app.get('/', (req, res) => {
    res.send('Hello')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server running in port ${PORT}`))