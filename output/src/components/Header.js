import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/header.scss'
import logo_header from '../assets/images/blog_dark.png'

const Header = () => {
  const [userState, setUserState] = useState({ redirect: '/login', text: 'LOGIN', isLogged: true})
  const isLogged = () => {
    // if userstate islogged is true
    // login
    // if path is /login or /register , show close button
    if(userState.isLogged === true){
      setUserState({ redirect: '/logout', text: 'LOGOUT', isLogged: false});
    } else {
      setUserState({ redirect: '/login', text: 'LOGIN', isLogged: true});      
    }
  }

  return (
    <header>
      <div className="header">
        <div className="header__logo">
          <img src={logo_header} alt="Blog logo" />
        </div>
        <div className="header__actions">
          <Link onClick={isLogged} className="header__actions--login" to={userState.redirect}>{userState.text}</Link>     
        </div>
      </div>
    </header>

  )
}

export default Header
