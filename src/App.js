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
  const [sortedTodos, setSortedTodos] = useState([]);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    if (sortOption !== "") {
      const methods = {
        text: "text",
        completed: "completed",
        created_at: "created_at"
      }
      const sortProperty = methods[sortOption];
      console.log(sortProperty);
      const sorted = [...todos].sort((a, b) => (a[sortProperty] > b[sortProperty]) - (a[sortProperty] < b[sortProperty]));
      console.log(sorted);
      setSortedTodos(sorted);
    }
  }, [sortOption]);

  const handleSort = (method) => {
    setSortOption(method);
  }

  useEffect(() => {
    let url = "https://cse204.work/todos";
    axios.get(url, config).then(function (response) {
      setTodos(response.data);
      setSortedTodos(response.data);
    })
  }, []);

  const handleDelete = (id) => {
    let url = `https://cse204.work/todos/${id}`;
    console.log(url);
    axios.delete(url, config).then(function (response) {
      console.log(response.data);
      const newTodos = todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
      setSortedTodos(newTodos);
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
      setSortedTodos(todos => [res, ...todos])
    })
  }

  return (
    <div className="App">
      <div className="container text-center">
        <h2 className="my-5" id="title">Sahil and Will's TodoList</h2>
        <div className="container mt-5">
          <Newtodo handleUpload={handleUpload} />
          <div className="sort-buttons mb-1">
            <div className="h5">Sort Todos</div>
            <div className="d-flex justify-content-center mt-3">
              <button className="btn btn-secondary mx-2" onClick={() => handleSort("text")}>Alphabetical</button>
              <button className="btn btn-secondary mx-2" onClick={() => handleSort("created_at")}>Created Time</button>
              <button className="btn btn-secondary mx-2" onClick={() => handleSort("completed")}>Completed</button>
            </div>
          </div>
          <div className="todo-container">
            {sortedTodos.map(todo => {
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

