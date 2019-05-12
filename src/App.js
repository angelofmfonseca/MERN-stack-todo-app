import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import CreateToDo from './frontend/CreateToDo'
import EditToDo from './frontend/EditToDo'
import ToDoList from './frontend/ToDoList'
import logo from './img/icone_linkedin.GIF'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="https://www.linkedin.com/in/angelomfonseca/" 
            className='navbar-brand' 
            target='_blank' 
            rel='noopener noreferrer'>
              <img src={ logo } alt="linkedin logo" width='20' height='20' />
            </a>
            <Link to='/' className='navbar-brand'>MERN Stack ToDo app</Link>
            <div>
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to='/' className='nav-link'>ToDos</Link>
                </li>
                <li className="navbar-item">
                  <Link to='/create' className='nav-link'>Create ToDo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path='/' component={ ToDoList } />
          <Route path='/edit/:id' component={ EditToDo } />
          <Route path='/create' component={ CreateToDo } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
