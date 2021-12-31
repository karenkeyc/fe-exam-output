import React from 'react'
import '../assets/styles/footer.scss'
import logo from '../assets/images/blog_light.png'
import up from '../assets/images/arrow_up.png'

const Footer = () => {
  return (
  <footer>
    <div className="footer">    
      <div className="upper__container">
        <div className="logo__container">
          <img className="logo__container--light" src={logo} alt="logo light" />
          <div className="upper__container-text">
            <p className="description">サンプルテキストサンプル ルテキストサンプルテキスト</p>
            <p className="description">サンプルテキストサンプル ルテキスト</p>
          </div>
        </div>
        <div className="back-to-top__container">
          <button className="square__container">
            <img className="top__arrow" src={up} alt="top arrow" />
            <p className="top__desc">TOP</p>
          </button>
        </div>
      </div>
      <div className="copyright__container">
        <p className="copyright__text">Copyright©2007-2019 Blog Inc.</p>
      </div>
    </div>
  </footer>

  )
}

export default Footer
