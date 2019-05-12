const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const todoRoutes = express.Router()

const PORT = 4000

let todo = require('./model')

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/todos-db', {
    useNewUrlParser: true
})
const connection = mongoose.connection;

connection.once('open', () => {
    console.log(`Connection to database established successfully`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
})
