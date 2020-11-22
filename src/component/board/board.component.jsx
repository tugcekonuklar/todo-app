import React from 'react'
import './board.style.css'

export const Board = (props) => {
  return (
      <div className="level-item has-text-centered board-layout">
        <div>
          <p className="heading">Todos</p>
          <p className="title">{props.numTodos}</p>
        </div>
    </div>

  )
}
