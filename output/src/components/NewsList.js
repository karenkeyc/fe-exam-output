import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/news-list.scss";
import article_img from "../assets/images/article_img.png";

const NewsList = () => {
  const loadMore = (event) => {
    let currentItems = 2;
    const elementList = [...document.querySelectorAll(".posts .posts__group")];

    for (let i = currentItems; i < currentItems + 2; i++) {
      if (elementList[i]) {
        console.log(elementList[i]);
        elementList[i].style.display = "block";
      }
    }
    currentItems += 2;

    if (currentItems >= elementList.length) {
      event.target.style.display = "none";
    }
  };
  const title = `サンプルテキストサンプル\nルテキストサンプルテキストサンプルテキストサンプル ルテキ`;
  const time = "2019.06.19";

  return (
    <section className="news">
      <div className="news__header">
        <h1 className="news__title">NEWS</h1>
        <div className="news__action">
          <Link className="news__create-post" to="/create-new-post">
            Create New Post
          </Link>
        </div>
      </div>
      <div className="posts">
        <div className="posts__group">
          <div className="posts__row">
            <article className="post__container">
              <div className="post__single-container">
                <Link className="single-post__link" to="/single-post-view">
                  <img
                    className="post__image"
                    src={article_img}
                    alt="news_photo"
                  />
                  <p className="post__date">{time}</p>
                  <p className="post__title">{title}</p>
                </Link>
              </div>
            </article>
            <article className="post__container">
              <div className="post__single-container">
                <Link className="single-post__link" to="/single-post-view">
                  <img
                    className="post__image"
                    src={article_img}
                    alt="news_photo"
                  />
                  <p className="post__date">{time}</p>
                  <p className="post__title">{title}</p>
                </Link>
              </div>
            </article>
            <article className="post__container">
              <div className="post__single-container">
                <Link className="single-post__link" to="/single-post-view">
                  <img
                    className="post__image"
                    src={article_img}
                    alt="news_photo"
                  />
                  <p className="post__date">{time}</p>
                  <p className="post__title">{title}</p>
                </Link>
              </div>
            </article>
          </div>
        </div>
        <div className="posts__group">
          <div className="posts__row">
            <article className="post__container">
              <div className="post__single-container">
                <Link className="single-post__link" to="/single-post-view">
                  <img
                    className="post__image"
                    src={article_img}
                    alt="news_photo"
                  />
                  <p className="post__date">{time}</p>
                  <p className="post__title">{title}</p>
                </Link>
              </div>
            </article>
            <article className="post__container">
              <div className="post__single-container">
                <Link className="single-post__link" to="/single-post-view">
                  <img
                    className="post__image"
                    src={article_img}
                    alt="news_photo"
                  />
                  <p className="post__date">{time}</p>
                  <p className="post__title">{title}</p>
                </Link>
              </div>
            </article>
            <article className="post__container">
              <div className="post__single-container">
                <Link className="single-post__link" to="/single-post-view">
                  <img
                    className="post__image"
                    src={article_img}
                    alt="news_photo"
                  />
                  <p className="post__date">{time}</p>
                  <p className="post__title">{title}</p>
                </Link>
              </div>
            </article>
          </div>
        </div>
        <div className="posts__group">
          <div className="posts__row">
            <article className="post__container">
              <div className="post__single-container">
                <Link className="single-post__link" to="/single-post-view">
                  <img
                    className="post__image"
                    src={article_img}
                    alt="news_photo"
                  />
                  <p className="post__date">{time}</p>
                  <p className="post__title">{title}</p>
                </Link>
              </div>
            </article>
            <article className="post__container">
              <div className="post__single-container">
                <Link className="single-post__link" to="/single-post-view">
                  <img
                    className="post__image"
                    src={article_img}
                    alt="news_photo"
                  />
                  <p className="post__date">{time}</p>
                  <p className="post__title">{title}</p>
                </Link>
              </div>
            </article>
            <article className="post__container">
              <div className="post__single-container">
                <Link className="single-post__link" to="/single-post-view">
                  <img
                    className="post__image"
                    src={article_img}
                    alt="news_photo"
                  />
                  <p className="post__date">{time}</p>
                  <p className="post__title">{title}</p>
                </Link>
              </div>
            </article>
          </div>
        </div>
        <div className="posts__group">
          <div className="posts__row">
            <article className="post__container">
              <div className="post__single-container">
                <Link className="single-post__link" to="/single-post-view">
                  <img
                    className="post__image"
                    src={article_img}
                    alt="news_photo"
                  />
                  <p className="post__date">{time}</p>
                  <p className="post__title">{title}</p>
                </Link>
              </div>
            </article>
            <article className="post__container">
              <div className="post__single-container">
                <Link className="single-post__link" to="/single-post-view">
                  <img
                    className="post__image"
                    src={article_img}
                    alt="news_photo"
                  />
                  <p className="post__date">{time}</p>
                  <p className="post__title">{title}</p>
                </Link>
              </div>
            </article>
            <article className="post__container">
              <div className="post__single-container">
                <Link className="single-post__link" to="/single-post-view">
                  <img
                    className="post__image"
                    src={article_img}
                    alt="news_photo"
                  />
                  <p className="post__date">{time}</p>
                  <p className="post__title">{title}</p>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="load-more">
        <button className="load-more__button" onClick={loadMore}>
          LOAD MORE
        </button>
      </div>
    </section>
  );
};

export default NewsList;
