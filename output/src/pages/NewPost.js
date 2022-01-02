import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Header from '../components/Header'
import Footer from '../components/Footer'

const NewPost = () => {
  return (
    <>
    <Header/>
    <Breadcrumb/>
    <section>
      <form>
        <div className="new-post__actions">
          <Link className="new-post__save" to="/single-post-view">Save Post</Link>
          <Link className="new-post__cancel" to="/">Cancel</Link>
        </div>
        <div className="new-post__container">
          <p className="new-post__timestamp">2019.06.19</p>
        </div>
        <div className="new-post__container">
          <input className="new-post__input new-post__title" type="text" maxLength={100} size={100} placeholder="Title" />
          <div className="new-post__input new-post__upload">
            <label htmlfor="upload-button">
              {/* {image.preview ? (
            <img src={image.preview} alt="dummy" width="300" height="300" />
          ) : (
            <>
              <span className="fa-stack fa-2x mt-3 mb-2">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fas fa-store fa-stack-1x fa-inverse" />
              </span>
              <h5 className="text-center">Upload your photo</h5>
            </>
          )} */}
            </label>
            {/* <input
          type="file"
          id="upload-button"
          style={{ display: "none" }}
          onChange={handleChange}
        /> */}
            {/* <button onClick={handleUpload}>Upload</button> */}
          </div>
          <input className="new-post__input new-post__content" type="text" maxLength={100} size={100} placeholder="Content" />
        </div>
      </form>
    </section>
    <Footer/>
    </>

  )
}

export default NewPost
