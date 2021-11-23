import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js'
import Newtodo from './Newtodo.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Sahil and Will's ToDo App</h1>
        <section id='formsection'>
          <Newtodo />
        </section>
        <section id='myTodos'>
          <Todo />
          <Todo />
          <Todo />
        </section>
      </div>
    );
  }
}

export default App;
