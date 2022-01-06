import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'
import img1 from '../assets/images/carousel_img1.png'
import '../assets/styles/singlepost.scss'

const Single = () => {
  const title = "サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト";
  return (
    <>
      <Header />
      <Breadcrumb title={title}/>
      <section className="single-post">
        <form className="single-post__form">
          <div className="single-post__actions">
            <Link className="single-post__save" to="/single-edit-view">
              Edit Post</Link>
          </div>
          <div className="single-post__container">
            <p className="single-post__timestamp">2019.06.19</p>
          </div>
          <div className="single-post__container">
            <p className="single-post__title">サンプルテキストサンプル ルテキストサンプルテキ
              ストサンプルテキストサンプル ルテキスト </p>
            <div className="single-post__image-container">
              <img src={img1} alt="" className="single-post__image" />
            </div>
            <div className="single-post__content">
              <p className="content">
                ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。
              </p>
              <p className="content">
                ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。
              </p>
            </div>
          </div>
        </form>
      </section>

      <hr />

      <section className="comments">
        <div className="comment-section">
          <h1 className="comment-section__header">COMMENT</h1>
        </div>
        <div className="comment-section">
          <div className="comment-box">
            <p className="comment-box__content">
              ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。
            </p>
            <p className="comment-box__timestamp">
              1 month ago
              {/* Comment data, formatted by duration from now */}
            </p>
          </div>
          <div className="comment-box">
            <p className="comment-box__content">
              ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。
            </p>
            <p className="comment-box__timestamp">
              3 months ago
              {/* Comment data, formatted by duration from now */}
            </p>
          </div>
          <form className="create-comment">
            
            <button className="submit__button">SUBMIT</button>
          </form>
        </div>
      </section>

      <Footer/>

    </>
  )
}

export default Single
