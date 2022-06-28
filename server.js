const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const iotdata = require('./routes/iodata');
const connectDb = require('./config/db')

dotenv.config({ path: './config/config.env' })

connectDb();

const PORT = process.env.PORT || 8080

const app = express();

app.use(cors())
app.use(express.json({ extended: false }))
app.use('/api/v1/iotdata', iotdata)

app.listen(PORT, () => console.log(`Server running in port ${PORT}`))