import React, { useEffect } from "react";
import { connect } from "react-redux";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import { getPosts } from "../../actions/post";

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log("the posts", posts);

  return (
    <div className="container">
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fa fa-user" /> Welcome to the community.
        <br />
        Please remember to be respectful!!
      </p>
      <PostForm />
      <div className="posts">
        {posts.map((post) => (
          <div >
            <PostItem key={post._id} post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
