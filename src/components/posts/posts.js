import React, {  useEffect } from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import {Spinner} from "react-bootstrap";
import { getPosts } from '../../actions/post';

const Posts = ({ getPosts, post: { posts,loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
      loading?(<Spinner/>): ( <>
        <h1 className="large text-primary">Posts</h1>
        <p className="lead">
          <i className="fa fa-user" /> Welcome to the Platform
        </p>
        <PostForm />
        <div className="posts">
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
      </>
  ));
   
};


const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);