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

  const handleDelete = (id) => {
    let url = `https://cse204.work/todos/${id}`;
    console.log(url);
    axios.delete(url, config).then(function (response) {
      console.log(response.data);
      const newTodos = todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
      console.log(newTodos);
    });
  }

  const handleUpload = (inputValue) => {
    let url = "https://cse204.work/todos";
    let data = {
      "text": inputValue,
    };
    axios.post(url, data, config).then(function (response) {
      let res = response.data;
      console.log(res);
      setTodos(todos => [res, ...todos]);
    })
  }

  return (
    <div className="App">
      <div className="container text-center">
        <h2 className="my-5" id="title">Sahil and Will's TodoList</h2>
        <div className="container mt-5">
          <Newtodo handleUpload={handleUpload} />
          <div className="todo-container">
            {todos.map(todo => {
              return (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  bodyText={todo.text}
                  completed={todo.completed}
                  config={config}
                  handleDelete={handleDelete}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

