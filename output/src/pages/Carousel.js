import React from 'react'
import '../assets/styles/carousel.scss'
import img1 from '../assets/images/carousel_img1.png'
import img2 from '../assets/images/carousel_img2.jpg'
import img3 from '../assets/images/carousel_img3.jpg'
import left from '../assets/images/arrow_left.png'
import right from '../assets/images/arrow_right.png'

const Carousel = () => {
  return (
  <main>
    <section>
      <div className="carousel">
        <div className="carousel__container">
          <div className="carousel__caption">
            <span className="carousel__caption-header">サンプルテキスト</span> <br className="carousel__caption-spacer"/>
            <span className="carousel__caption-header">サンプル ルテキスト</span> 
            <br className="carousel__caption-spacer"/>
            <span className="carousel__caption-header">サンプルテキスト</span> <br className="carousel__caption-spacer"/>
            <div className="carouse__caption-inner">
              <span className="carousel__caption-date">2019.06.19</span>
            </div>
          </div>
    
          {/* carousel images container*/}
          <input id="carousel-1" className="carousel--open" type="radio" name="carousel" aria-hidden="true" hidden defaultChecked="checked" />
          <div className="carousel__item">
            <img className="carousel__img" src={img1} alt="carousel_photo"/>
          </div>
          <input className="carousel--open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden />
          <div className="carousel__item">
            <img className="carousel__img" src={img2} alt="carousel_photo"/>
          </div>
          <input className="carousel--open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden />
          <div className="carousel__item">
            <img className="carousel__img" src={img3} alt="carousel_photo"/>
          </div>
          {/* endOf carousel images container */}
          {/* carousel controls */}
          <label className="carousel__control carousel__control--prev control-1" htmlFor="carousel-3">
            <img className="carousel__arrow-img" src={left} alt="left_arrow"/>
          </label>
          <label className="carousel__control carousel__control--next control-1" htmlFor="carousel-2">
            <img className="carousel__arrow-img" src={right} alt="right_arrow"/>
          </label>
          <label className="carousel__control carousel__control--prev control-2" htmlFor="carousel-1">
            <img className="carousel__arrow-img" src={left} alt="left_arrow"/>
          </label>
          <label className="carousel__control carousel__control--next control-2" htmlFor="carousel-3">
            <img className="carousel__arrow-img" src={right} alt="right_arrow"/>
          </label>
          <label className="carousel__control carousel__control--prev control-3" htmlFor="carousel-2">
            <img className="carousel__arrow-img" src={left} alt="left_arrow"/>
          </label>
          <label className="carousel__control carousel__control--next control-3" htmlFor="carousel-1">
            <img className="carousel__arrow-img" src={right} alt="right_arrow"/>
          </label>
          {/* endOf carousel controls */}
          {/* carousel bottom navigation */}
          <ol className="carousel__indicators">
            <li className="carousel__list">
              <label htmlFor="carousel-1" className="carousel-bullet">•</label>
            </li>
            <li className="carousel__list">
              <label htmlFor="carousel-2" className="carousel-bullet">•</label>
            </li>
            <li className="carousel__list">
              <label htmlFor="carousel-3" className="carousel-bullet">•</label>
            </li>
          </ol>
          {/* endOf carousel bottom navigation */}
        </div>
      </div>
    </section>
  </main>
  )
}

export default Carousel
