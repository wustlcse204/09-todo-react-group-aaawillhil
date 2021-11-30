import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo.js'
import Newtodo from './Newtodo.js'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
let config = {
  headers: {
    "x-api-key": "27e349-06b730-3e1f43-19548a-c7735e"
  }
}

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let url = "https://cse204.work/todos";
    axios.get(url, config).then(function (response) {
      setTodos(response.data);
    })
  }, []);

  return (
    <div className="App">
      <div className="container text-center">
        <h2 className="my-5" id="title">Sahil and Will's TodoList</h2>
        <div className="container mt-5">
          <Newtodo />
          <div className="todo-container">
            {todos.map(todo => {
              return <Todo key={todo.id} id={todo.id} bodyText={todo.text} completed={todo.completed} config={config} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

