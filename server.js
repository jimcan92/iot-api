const path = require('path')
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const iotdata = require('./routes/iodata');
const connectDb = require('./config/db')

dotenv.config({ path: './config/config.env' })

// connectDb();

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
// app.use('/api/v1/iotdata', iotdata)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server running in port ${PORT}`))