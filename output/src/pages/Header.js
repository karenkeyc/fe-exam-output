import React from 'react'
import '../assets/styles/header.scss'
import logo_header from '../assets/images/blog_dark.png'

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header__logo">
          <img src={logo_header} alt="Blog logo" />
        </div>
        <div className="header__actions">
          <h3 className="header__actions--login">LOGOUT</h3>
        </div>
      </div>
    </header>

  )
}

export default Header
