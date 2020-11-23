import React from "react";
import './todo.style.css'
export const Todo = (props) => {
  return (
    <div className='list-item'>
      {props.content}
      <button className="delete is-pulled-right" onClick={() => { props.onDelete(props.id) }}></button>
    </div>
  );
}