import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Todo.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function Todo(props) {
  const [checked, setChecked] = useState(props.completed);

  const handleCheck = () => {
    let url = `https://cse204.work/todos/${props.id}`;
    let data = {
      "completed": !checked
    }
    axios.put(url, data, props.config).then(function (response) {
      console.log("Checked:", response.data);
    });

    setChecked(!checked);
  }

  return (
    <div className="todo" id={props.id}>
      <input
        type="checkbox"
        className="checkbox"
        onChange={handleCheck}
        defaultChecked={checked}
      />
      <p className={`todo-title ${(checked && "strike-through")}`}>
        {props.bodyText}
      </p>
      <button type="button" className="btn trash-btn ms-auto" onClick={() => props.handleDelete(props.id)}>
        <FontAwesomeIcon icon={faTrash} size="lg" />
      </button>
    </div >
  );
}