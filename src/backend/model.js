const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Todo = new Schema({
    todo_description: {
        type: String,
        content: String
    },
    todo_responsible: {
        type: String,
        content: String
    },
    todo_priority: {
        type: String,
        content: String
    },
    todo_completed: {
        type: Boolean,
        content: String
    }
})

module.exports = mongoose.model('Todo', Todo)