import React, { useState } from 'react';
import './Newtodo.css';

export default function Newtodo(props) {
  const [inputTerm, setInputTerm] = useState("");

  const handleUserInput = (e) => {
    setInputTerm(e.target.value);
  }

  const handleSubmit = (e) => {
    props.handleUpload(inputTerm);
    e.preventDefault();
    setInputTerm("");
  }

  return (
    <form id="new-post-form" onSubmit={handleSubmit}>
      <div className="mb-3 d-flex justify-content-center">
        <span className="input-span input-group-text form-text-btn d-none d-lg-flex" id="form-add-on">What's Next?</span>
        <input
          type="text"
          className="form-control todo-input todo-input-media"
          placeholder="Laundry"
          value={inputTerm}
          onChange={handleUserInput}
        />
        <button
          className="btn btn-success form-btn"
          type="button"
          id="submit-button"
          onClick={handleSubmit}
        >
          Add Task
        </button>
      </div>
    </form>

  );
}
