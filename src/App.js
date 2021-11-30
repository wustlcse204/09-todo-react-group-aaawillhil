import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js'
import Newtodo from './Newtodo.js'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container text-center">
          <h2 className="my-5" id="title">Sahil and Will's TodoList</h2>
          <div className="container mt-5">
            <Newtodo />
            <div className="todo-container">
              <Todo />
              <Todo />
              <Todo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
