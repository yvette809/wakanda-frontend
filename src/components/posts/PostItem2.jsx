import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem2 = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, image, user, likes, comments, date },
  showActions,
}) => {
  console.log("the image", image && image);

  return (
    <div className="container ">
      <div className=" py-1 mb-3 bg-light" style={{ borderRadius: "10px" }}>
        <div className="d-flex ">
          <Link to={`/profile/${user}`}>
            <img
              className="round-img mr-2"
              src={` https://vast-bayou-47622.herokuapp.com/profiles/user/${user._id}.png`}
              onError={(e) =>
                (e.target.src =
                  "https://cdn2.vectorstock.com/i/1000x1000/20/91/avatar-man-soccer-player-graphic-vector-9422091.jpg")
              }
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              alt="post-img"
            />
          </Link>
          <h4 className="text-primary my-3">{name}</h4>
        </div>
        <div>
          <p className="my-1">{text}</p>
          {image && (
            <img
              src={image}
              alt="post_img"
              className= "img-fluid"
              style={{ width: "400px", height: "400px" ,borderRadius:"10px"}}
            />
          )}
          <p className="post-date">
            Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
          </p>

          {showActions && (
            <>
              <div className="mb-5 ">
                <button
                  onClick={() => addLike(_id)}
                  type="button"
                  className="btn btn-light"
                >
                  <i className="fa fa-thumbs-up" />{" "}
                  <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
                </button>
                <button
                  onClick={() => removeLike(_id)}
                  type="button"
                  className="btn btn-light"
                >
                  <i className="fa fa-thumbs-down" />
                </button>
                <Link
                  to={`/posts/${_id}`}
                  className="btn btn-primary dis_button"
                >
                  Comments{" "}
                  {comments.length > 0 && (
                    <span className="comment-count">{comments.length}</span>
                  )}
                </Link>
                {!auth.loading && auth.user && user === auth.user._id && (
                  <button
                    onClick={() => deletePost(_id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    <i className="fa fa-times" />
                    
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
PostItem2.defaultProps = {
  showActions: true,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem2
);
