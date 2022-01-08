import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Comments from "../components/Comments";
import Footer from "../components/Footer";
import img1 from "../assets/images/carousel_img1.png";
import "../assets/styles/singlepost.scss";

const SingleEdit = () => {
  const title =
    "サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト";
  const content_text =
    "ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。";
  const showPreview = ({ target }) => {
    if (target.files.length > 0) {
      const src = URL.createObjectURL(target.files[0]);
      let preview = document.getElementById("file-preview-edit");
      let uploadBtn = document.querySelector(".upload-image");
      preview.src = src;
      preview.style.display = "block";
      uploadBtn.style.display = "none";
    }
  };

  return (
    <>
      <Header />
      <Breadcrumb title={title} />
      <section className="single-post">
        <form className="single-post__form--edit">
          <div className="single-post__actions">
            <Link className="single-post__save" to="/single-post-view">
              Save Post
            </Link>
            <Link className="single-post__cancel" to="/">
              Cancel
            </Link>
          </div>
          <div className="single-post__container">
            <p className="single-post__timestamp">2019.06.19</p>
          </div>
          <div className="single-post__container">
            <div className="single-post__textarea-title-container">
              <textarea
                className="single-post__title--edit"
                type="text"
                rows="2"
                value={title}
              />
            </div>
            <div className="single-post__file-upload">
              <div className="single-post__file-upload-container">
                <div className="file-preview__container--edit">
                  <img id="file-preview--edit" alt="" src={img1} />
                  <div className="upload-image">
                    <label className="upload-image__label" htmlFor="file-ip-1">
                      Upload Image
                    </label>
                    <input
                      className="upload-image__input"
                      type="file"
                      id="file-ip-1"
                      accept="image/*"
                      onChange={showPreview}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="single-post__content">
              <textarea
                className="content__textarea"
                type="text"
                rows="9"
                value={`${content_text}\n\n${content_text}`}
              />
            </div>
          </div>
        </form>
      </section>

      <Comments />
      <Footer />
    </>
  );
};

export default SingleEdit;
