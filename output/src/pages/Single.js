import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Comments from "../components/Comments";
import img1 from "../assets/images/carousel_img1.png";
import "../assets/styles/singlepost.scss";

const Single = () => {
  const isLoggedIn = useSelector((state) => state.user.credential.isLoggedIn);
  const title =
    "サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト";
  const content_text =
    "ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。";
  return (
    <>
      <Breadcrumb title={title} />
      <section className="single-post">
        <form className="single-post__form">
          <div className="single-post__actions">
            {isLoggedIn && (
              <Link className="single-post__save" to="/single-edit-view">
                Edit Post
              </Link>
            )}
          </div>
          <div className="single-post__container">
            <p className="single-post__timestamp">2019.06.19</p>
          </div>
          <div className="single-post__container">
            <p className="single-post__title">{title}</p>
            <div className="single-post__image-container">
              <img src={img1} alt="" className="single-post__image" />
            </div>
            <div className="single-post__content">
              <p className="content">{content_text}</p>
              <p className="content">{content_text}</p>
            </div>
          </div>
        </form>
      </section>
      <Comments />
    </>
  );
};

export default Single;
