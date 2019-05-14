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

todoRoutes.route('/').get((req, res) => {
    todo.find((err, todos) => {
        if(err){
            console.log(err);
        } else {
            res.json(todos)
        }
    })
})

todoRoutes.route('/:id').get((req, res) => {
    let id = req.params.id
    todo.findById(id, (err, todo) => {
        res.json(todo)
    })
})

todoRoutes.route('/add').post((req, res) => {
    let todo = new Todo(req.body)
    todo.save()
        .then((todo) => {
            res.status(200).json({
                'todo': 'ToDo added successfully'
            })
        .catch((err) => {
            res.status(400).send('Adding new ToDo failed')
        })
        })
})

app.use('/todos', todoRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
})
