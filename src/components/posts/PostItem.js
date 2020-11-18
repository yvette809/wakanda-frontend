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
        <div className="col-lg-4 col-sm-12 text-center mb-2">
          <Link to={`/profile/${user}`}>
            <img
              className="round-img"
              //  src={avatar}
              src={` https://vast-bayou-47622.herokuapp.com/profiles/${user._id}.png`}
              onError={(e) =>
                (e.target.src =
                  "https://cdn2.vectorstock.com/i/1000x1000/20/91/avatar-man-soccer-player-graphic-vector-9422091.jpg")
              }
              style={{ width: "100px", height: "100px", borderRadius: "5px" }}
              alt="post-img"
            />
          </Link>
        </div>
        <div className="col-lg-8 col-sm-12">
          <div>
            <h4 className="text-primary my-2">{name}</h4>
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
