require('dotenv').config();
const path = require('path')
const express = require('express');
const cors = require('cors');

const iotdata = require('./api/iodata');
const connectDb = require('./config/db')

connectDb();

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/v1/iotdata', iotdata)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server running in port ${PORT}`))