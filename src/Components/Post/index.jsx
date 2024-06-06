import React from "react";
import "./styles.css";

import heartIco from "../../Assets/heart-bl.svg";
import heartwhiteIco from "../../Assets/heart-wh.svg";
import commentIco from "../../Assets/comment.svg";
import shareIco from "../../Assets/share.svg";

const Post = ({ postInfo }) => {
  const {
    description,
    author,
    username,
    userImg,
    poster,
    likes,
    comments,
    shares,
  } = postInfo;

  return (
    <>
      <div className="post-container">
        <div className="post">
          <div className="top-info">
            <div className="user-info">
              <img src={userImg} />
              <div>
                <div className="name">{author}</div>
                <div className="username">{username}</div>
              </div>
            </div>
            <div className="more">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </div>
          <p className="description">
            {description} <span>Read More</span>
          </p>
          <div className="poster">
            <img src={poster} />
            <img src={heartwhiteIco} className="white-heart" />
          </div>
        </div>
        <div className="like-comment-share">
          <div className="like btn">
            <img src={heartIco} />
            <span>{likes}</span>
          </div>
          <div className="comment btn">
            <img src={commentIco} />
            <span>{comments}</span>
          </div>
          <div className="share btn">
            <img src={shareIco} />
            <span>{shares}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
