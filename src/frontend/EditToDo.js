import React, { Component } from 'react'
import axios from 'axios'

class EditToDo extends Component {
    constructor(props){
        super(props)

        this.onChangeToDoDescription = this.onChangeToDoDescription.bind(this)
        this.onChangeToDoResponsible = this.onChangeToDoResponsible.bind(this)
        this.onChangeToDoPriority = this.onChangeToDoPriority.bind(this)
        this.onChangeToDoCompleted = this.onChangeToDoCompleted.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    componentDidMount(){
        axios.get('https://localhost:4000/todos/' + this.props.match.params.id)
            .then((res) => {
                this.setState({
                    todo_description: res.data.todo_description,
                    todo_responsible: res.data.todo_responsible,
                    todo_priority: res.data.todo_priority,
                    todo_completed: res.data.todo_completed,
                })
            })
            .catch((err) => {
                console.log(err)
            })
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

    onChangeToDoCompleted(e){
        this.setState({
            todo_completed: !this.state.todo_completed
        })
    }

    onSubmit(e){
        e.preventDefault()
        const obj = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }
        axios.post('http://localhost:4000/todos/update/' + this.props.match.params.id, obj)
            .then((res) => {
                console.log(res.data);
            })
        this.props.history.push('/')
    }

    render(){
        return(
            <React.Fragment>
                <h3>Update ToDo</h3>
                <form onSubmit={ this.onSubmit }>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" 
                            className='form-control'
                            value={ this.state.todo_description }
                            onChange={ this.onChangeToDoDescription }
                        />
                    </div>
                    <div className="form-group">
                        <label>Repsonsible: </label>
                        <input type="text" 
                            className='form-control'
                            value={ this.state.todo_responsible }
                            onChange={ this.onChangeToDoResponsible }
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input type="radio" 
                                name='priorityOptions'
                                id='priorityLow'
                                value='Low'
                                checked={ this.state.todo_priority === 'Low' }
                                className="form-check-input"
                                onChange={ this.onChangeToDoPriority } 
                            />
                            <label className="form-check-label">Low</label>
                        </div>                        
                        <div className="form-check form-check-inline">
                            <input type="radio" 
                                name='priorityOptions'
                                id='priorityMedium'
                                value='Medium'
                                checked={ this.state.todo_priority === 'Medium' }
                                className="form-check-input"
                                onChange={ this.onChangeToDoPriority } 
                            />
                            <label className="form-check-label">Medium</label>
                        </div>                        
                        <div className="form-check form-check-inline">
                            <input type="radio" 
                                name='priorityOptions'
                                id='priorityHigh'
                                value='High'
                                checked={ this.state.todo_priority === 'High' }
                                className="form-check-input"
                                onChange={ this.onChangeToDoPriority } 
                            />
                            <label className="form-check-label">High</label>
                        </div>
                        <div className="form-check" style={{ marginTop: 20 }}>
                            <input type="checkbox" 
                                className='form-check-input'
                                id='completedCheckbox'
                                name='completedCheckbox'
                                onChange={ this.onChangeToDoCompleted }
                                checked={ this.state.todo_completed }
                                value={ this.state.todo_completed }
                            />
                            <label htmlFor="completedCheckbox" 
                                className="form-check-label"
                            >
                                    Completed
                            </label>
                        </div>
                        <div className="form-group" style={{ marginTop: 20 }}>
                            <input type="submit" 
                                value="Update ToDo"
                                className="btn btn-primary"
                            />
                        </div>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default EditToDo