import React from "react";

const Comments = () => {
  return (
    <>
      <section className="comments">
        <hr className="divider" />
        <div className="comment-section">
          <h1 className="comment-section__header">COMMENT</h1>
        </div>
        <div className="comment-section">
          <div className="comment-box__container">
            <div className="comment-box">
              <p className="comment-box__content">
                ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。
              </p>
              <p className="comment-box__timestamp">
                3 months ago
                {/* Comment data, formatted by duration from now */}
              </p>
            </div>
          </div>
          <div className="comment-box__container">
            <div className="comment-box">
              <p className="comment-box__content">
                ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。
              </p>
              <p className="comment-box__timestamp">
                3 months ago
                {/* Comment data, formatted by duration from now */}
              </p>
            </div>
          </div>
          <form className="create-comment">
            <div className="create-comment__container">
              <textarea
                className="create-comment__textarea"
                type="text"
                rows="5"
                placeholder="Write comment"
              />
              <button className="create-comment__button">SUBMIT</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Comments;
