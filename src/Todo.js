import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className="todo" id="${post.id}">
        <input type="checkbox" className="checkbox" id="check-btn-${post.id}"></input>
        <p className="todo-title">
          {/* ${post.text} */}
        </p>
        <button type="button" className="btn trash-btn ms-auto" id="trash-btn-${post.id}">
          <i className="fas fa-trash fa-2x"></i>
        </button>
      </div>

    );
  }
}

export default Todo;
