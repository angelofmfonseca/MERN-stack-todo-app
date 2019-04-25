import React, { Component } from 'react'

class CreateToDo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
        this.onChangeToDoDescription = this.onChangeToDoDescription.bind(this)
        this.onChangeToDoResponsible = this.onChangeToDoResponsible.bind(this)
        this.onChangeToDoPriority = this.onChangeToDoPriority.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChangeToDoDescription(e){
        this.setState({
            todo_description: e.target.value
        })
    }
    onChangeToDoResponsible(e){
        this.setState({
            todo_responsible: e.target.value
        })
    }
    onChangeToDoPriority(e){
        this.setState({
            todo_priority: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()

        console.log(`Form Submitted!!!`)
        console.log(`ToDo Description: ${ this.state.todo_description }`)
        console.log(`ToDo Responsible: ${ this.state.todo_responsible }`)
        console.log(`ToDo Priority: ${ this.state.todo_priority }`)
        console.log(`ToDo Completed: ${ this.state.todo_completed }`)

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }
    render(){
        return(
            <h1>CreateToDo</h1>
        )
    }
}

export default CreateToDo