import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => {
  console.log("the id is", _id);

  return (
    <div className=" post container text-dark font-weight-bolder">
      <div className="row  ">
        <div className="col-lg-4 text-center mb-2">
          <Link to={`/profile/${user}`}>
            <img
              className="round-img"
              // src={avatar}
              src={`http://localhost:4000/profiles/${user && user._id}.png`}
              style={{ borderRadius: "50%" }}
              alt="post-img"
            />
          </Link>
        </div>
        <div className="col-lg-8">
          <div>
            <h4 className="text-primary">{name}</h4>
            <p className="my-1">{text}</p>
            <p className="post-date">
              Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
            </p>

            {showActions && (
              <>
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
                <Link to={`/posts/${_id}`} className="btn btn-primary">
                  Discussion{" "}
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
                    Delete
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
PostItem.defaultProps = {
  showActions: true,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
 
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
