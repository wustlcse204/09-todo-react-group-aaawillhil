import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Todo.css';
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons';

class Todo extends Component {
  render() {
    return (
      <div className="todo" id="${post.id}">
        <input type="checkbox" className="checkbox" id="check-btn-${post.id}" />
        <p className="todo-title">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <button type="button" className="btn trash-btn ms-auto" id="trash-btn-${post.id}">
          <FontAwesomeIcon icon={faTrash} size="lg" />
        </button>
      </div>

    );
  }
}

export default Todo;
