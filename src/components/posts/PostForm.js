import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, FormControl } from "react-bootstrap";
import Picker,{preload} from "emoji-picker-react";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div className="post-form ">
      <div className="bg-white text-center py-1">
        <h3>Say Something...</h3>
      </div>
      <Form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
      >
        <FormControl
          as="textarea"
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />

        {/* <div>
          {chosenEmoji && (
            <span>You chose: {chosenEmoji.emoji} </span>
            
          ) 
          }
          <Picker onEmojiClick={onEmojiClick} preload={true} />
        </div> */}
        <input type="submit" className="btn btn-dark my-1" value="Submit"/>
      </Form>
    </div>
  );
};

export default connect(null, { addPost })(PostForm);
