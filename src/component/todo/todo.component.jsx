import React from "react";
import './todo.style.css'
export const Todo = (props) => {
  return (
    <div className='box'>
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p className={`${props.status==='COMPLETED' ? 'done' : ''}`}>
              <strong className={`${props.status==='COMPLETED' ? 'done' : ''}`} >{props.title}</strong>
              <br />
              {props.content}
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <button className="button is-primary " onClick={() => {props.onComplate(props.id)}}>Done</button>
            </div>
          </nav>
        </div>
        <div className="media-right">
          <button className="delete is-pulled-right button-margin" onClick={() => { props.onDelete(props.id) }}></button>
        </div>
      </article>
    </div>
  );
}


