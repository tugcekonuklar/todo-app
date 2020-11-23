import React from "react";
import './todo.style.css'
export const Todo = (props) => {
  return (
    <div className='box'>
      <article className="media">
        <div className="media-content">
          <div className="content p-content">
            <p className={`${props.status === 'COMPLETED' ? 'done' : ''}`}>
              <strong className={`${props.status === 'COMPLETED' ? 'done' : ''}`} >{props.title}</strong>
              <br />
              {props.content}
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              {props.status === 'COMPLETED'
                ? <button className="button is-info " onClick={() => { props.onActivate(props.id) }}>Activate</button>
                :
                <div className="field-grouped">
                  <button className="button is-primary button-grouped" onClick={() => { props.onComplete(props.id) }}>Done</button>
                  <button className="button is-danger button-grouped" onClick={() => { props.onUpdate(props.id, props.title, props.content) }}>Update</button>
                </div>
              }
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


