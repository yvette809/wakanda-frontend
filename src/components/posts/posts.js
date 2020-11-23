import React, { useEffect } from "react";
import { connect } from "react-redux";
// import PostItem from "./PostItem";
import PostItem2 from "./PostItem2";
import PostForm from "./PostForm";
import { getPosts } from "../../actions/post";

const Posts = ({ getPosts, user, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="container " id="post">
      <h1 className=" text-primary  font-weight-bolder">Posts</h1>
      <h4 className="text-dark" style={{ fontSize: "1.5rem" }}>
        <i className=" fa fa-user mr-2" style={{ fontSize: "20px" }} /> Welcome
        to the community <strong>{user.name}</strong>. Please remember to be
        respectful!!
      </h4>

      <PostForm />
      <div>
        {posts.map((post) => (
          <div>
            {/* <PostItem key={post._id} post={post} /> */}
            <PostItem2 key={post._id} post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getPosts })(Posts);
