import React from 'react'
import './header.style.css'
import { ReactComponent as Logo } from '../../assets/todologo2.svg';
import { ReactComponent as TitleLogo } from '../../assets/mytitle.svg';

export const Header = (props) => {
  return (
    <div className="header-content">
      <nav className="level-left">
        <p className="level-item has-text-centered">
          <Logo alt="" className="img"></Logo>
          <TitleLogo className="img-title"></TitleLogo>
        </p>
      </nav>
    </div>
  )
}
