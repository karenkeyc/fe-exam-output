import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/newpost.scss'
import Breadcrumb from '../components/Breadcrumb'
import Header from '../components/Header'
import Footer from '../components/Footer'

const NewPost = () => {
  const showPreview = ({ target }) => {
    if (target.files.length > 0) {
      const src = URL.createObjectURL(target.files[0]);
      let preview = document.getElementById("file-preview");
      let uploadBtn = document.querySelector(".upload-image");
      preview.src = src;
      preview.style.display = "block";
      uploadBtn.style.display = "none";
    }
  }

  return (
    <>
      <Header />
      <Breadcrumb title="Create New Post"/>
      <section className="new-post">
        <form className="new-post__form">
          <div className="new-post__actions">
            <Link className="new-post__save" to="/single-post-view">Save Post</Link>
            <Link className="new-post__cancel" to="/">Cancel</Link>
          </div>
          <div className="new-post__container">
            <p className="new-post__timestamp">2019.06.19</p>
          </div>
          <div className="new-post__container">
            <textarea className="new-post__input new-post__title" type="text" rows="2" placeholder="Title" />
            {/* image upload */}
            <div className="new-post__file-upload">
              <div className="new-post__file-upload-container">
                <div className="file-preview__container">
                  <img id="file-preview" alt="" />
                  <div className="upload-image">
                    <label className="upload-image__label" htmlFor="file-ip-1">Upload Image</label>
                    <input className="upload-image__input" type="file" id="file-ip-1" accept="image/*" onChange={showPreview} />
                  </div>
                </div>
              </div>
            </div>
            {/* image upload */}
            <textarea className="new-post__input new-post__content" type="text" rows="3" placeholder="Content" />
          </div>
        </form>
      </section>
      <Footer />
    </>

  )
}

export default NewPost
