import React from 'react'
import './header.style.css'
import { ReactComponent as Logo } from '../../assets/todologo.svg';

export const Header = (props) => {
  return (
    <div className="header-content">
      <nav className="level">
        <p className="level-item has-text-centered">
          <Logo alt="" className="img"></Logo>
        </p>
      </nav>
    </div>
  )
}
