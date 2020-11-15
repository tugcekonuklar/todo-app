import React from "react";
import './todo.style.css'
export const Todo = (props) => {
  return (
    <div className='list-item'>
      <div className="item-wrapper">
        <div className="item-wrapper-content">
          <h1 className="title">{props.title}</h1>
          <h2 className="subtitle">{props.content}</h2>
        </div>
        <div className="item-wrapper-button">
          <button className="icon has-text-success fas fa-info-circle"></button>
          <button className="delete is-pulled-right" onClick={() => { props.onDelete(props.id) }}></button>
        </div>
      </div>
    </div>
  );
}