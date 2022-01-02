import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../assets/styles/header.scss'
import logo_header from '../assets/images/blog_dark.png'

const Header = (props) => {
  const [pathstate, setPathstate] = useState({ to: '/login', text: 'LOGIN'})
  const location = useLocation()
  const navigate = useNavigate()
  
  useEffect(() => {
    const textchange = document.querySelector('.header__actions--login')
    if(location && (location.pathname === '/login' || location.pathname === '/register')) {
      console.log(location.pathname, textchange.innerText)
      textchange.innerHTML = "CLOSE"
      setPathstate({to:'/', text: 'CLOSE'})
    }
  }, [location, location.pathname, navigate]) 

  return (
    <header>
      <div className="header">
        <div className="header__logo">
          <img src={logo_header} alt="Blog logo" />
        </div>
        <div className="header__actions">
          <Link 
            className="header__actions--login"
            to={{ 
              pathname: pathstate.to, 
              state: { background: location } 
              }}>
              {pathstate.text}
          </Link>     
        </div>
      </div>
    </header>

  )
}

export default Header
