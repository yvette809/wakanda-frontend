import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Leave a Comment</h3>
      </div>
      <Form
        className="form my-2"
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text });
          setText("");
        }}
      >
        <FormControl
          as="textarea"
          name="text"
          cols="30"
          rows="5"
          placeholder="Comment the post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="m-1"
          required
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </Form>
    </div>
  );
};

export default connect(null, { addComment })(CommentForm);
