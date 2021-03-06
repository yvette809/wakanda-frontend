import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Form, FormControl, Modal, Button } from "react-bootstrap";
import { addPost } from "../../actions/post";
import {getCurrentProfile} from "../../actions/profile"
import Loader from "../Loader";
// import { MdAddAPhoto } from "react-icons/md";

const PostForm = ({ addPost,getCurrentProfile, user, post, profile:{profile} }) => {

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  console.log('PROFILE', profile)
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const uploadFileHandler = async (e, id) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        `http://localhost:4000/posts/${id}/upload`,
        formData,
        config
      );

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const createPost = (e) => {
    e.preventDefault();
    addPost({ text, image });
    setText("");
    setImage("");
    setShowModal(false);
  };

  return (
    <div className="post-form ">
      <div className="bg-white text-center py-1">
     
      </div>
      <Modal show={showModal}>
        <Modal.Header closeButton onClick={() => setShowModal(false)}>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form my-1" onSubmit={createPost}>
            <FormControl
              as="textarea"
              name="text"
              cols="30"
              rows="5"
              placeholder="Create a post"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="mb-2"
              required
            />

            <FormControl
              type="text"
              value={image}
              name="image"
              placeholder="Add Image url"
              onChange={(e) => setImage(e.target.value)}
              className="mb-2"
              required
            />
            <Form.File
              id="image-file"
              label="Choose File"
              className="mb-3"
              custom
              onChange={() => uploadFileHandler(post._id)}
            ></Form.File>
            {/* <MdAddAPhoto /> */}
            {uploading && <Loader />}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={createPost}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="d-flex container mb-4">
        {/* {profile ? (
          <img
            src={profile.image}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            className="mr-2"
            
          />
        ) : (
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/20/91/avatar-man-soccer-player-graphic-vector-9422091.jpg"
            alt="user picture"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            className="mr-2"
          />
        )} */}
         <img
          className="round-img mr-2"
          //  src={avatar}
          src={` https://vast-bayou-47622.herokuapp.com/profiles/${user._id}.png`}
          onError={(e) =>
            (e.target.src =
              "https://cdn2.vectorstock.com/i/1000x1000/20/91/avatar-man-soccer-player-graphic-vector-9422091.jpg")
          }
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          alt="post-img"
        /> 
        <button
          className="bg-info  mb-5"
          style={{
            padding: "8px 12px",
            width: "50vw",
            borderRadius: "20px 25px",
            fontSize: "1.5rem",
          }}
          onClick={() => setShowModal(true)}
        >
          {" "}
          What's on your mind {user.name}?...
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  post: state.post,
  profile: state.profile,
});

export default connect(mapStateToProps, { addPost,getCurrentProfile })(PostForm);
