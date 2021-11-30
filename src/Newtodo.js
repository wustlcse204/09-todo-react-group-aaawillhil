import React, { Component } from 'react';
import './Newtodo.css';

class Newtodo extends Component {
  render() {
    return (
      <form id="new-post-form">
        <div className="mb-3 d-flex justify-content-center">
          <span className="input-span input-group-text form-text-btn d-none d-lg-flex" id="form-add-on">What's Next?</span>
          <input type="text" className="form-control todo-input todo-input-media" placeholder="Laundry" />
          <button className="btn btn-success form-btn" type="button" id="submit-button">Add Task</button>
        </div>
      </form>

    );
  }
}

export default Newtodo;
