import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div class="todo">
        <input type="checkbox" class="checkbox" id="check-btn-${post.id}"></input>
        <p class ="todo-title">
        do it
        </p>
        <button type="button" class ="btn trash-btn ms-auto" id="trash-btn-${post.id}">
            <i class="fas fa-trash fa-2x"></i>
        </button>
      </div>
    
    );
  }
}

export default Todo;
