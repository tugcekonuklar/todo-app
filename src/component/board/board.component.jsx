import React from 'react'
import './board.style.css'

export const Board = (props) => {
  return (
    <nav className="level board-layout">
      <div className="level-item has-text-centered ">
        <div>
          <p className="heading">Open</p>
          <p className="title">{props.numTodos}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Completed</p>
          <p className="title">{props.numCompleted}</p>
        </div>
      </div>
    </nav>

  )
}
