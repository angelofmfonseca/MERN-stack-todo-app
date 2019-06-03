import React, { Component } from 'react'
import axios from 'axios'

import ToDo from './ToDo'

class ToDoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/todos/')
            .then((res) => {
                this.setState({
                    todos: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    componentDidUpdate(){
        axios.get('http://localhost:4000/todos/')
            .then((res) => {
                this.setState({
                    todos: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    todoList(){
        return this.state.todos.map((currentToDo, i) => {
            return <ToDo todo={ currentToDo } key={ i } />
        })
    }

    render(){
        return(
            <React.Fragment>
                <h3>ToDos List</h3>
                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default ToDoList