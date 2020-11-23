import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts, deletePostAdmin } from "../actions/post";
//  import { setAlert} from "../../actions/alert";
import { Container, Row, Col, Button } from "react-bootstrap";
import Loader from "./Loader";

const AdminPosts = ({
  getPosts,
  deletePostAdmin,
  auth,
  post: { post, posts, loading, error },
}) => {
  const { isAuthenticated, user } = auth;

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      deletePostAdmin(id);
    }
  };

  return (
    <Container style={{ marginTop: "120px" }}>
      <h1 className="text-primary bg-light m-4">Posts</h1>

      {loading ? (
        <Loader />
      ) : (
        <>
          <Row className="mb-5 ">
            {posts.map((post) => (
              <>
                <Col md={4} key={post._id}>
                  <div className="mb-2 d-flex">
                    <img
                      className="round-img mr-2"
                      src={` https://vast-bayou-47622.herokuapp.com/profiles/${post.user._id}.png`}
                      onError={(e) =>
                        (e.target.src =
                          "https://cdn2.vectorstock.com/i/1000x1000/20/91/avatar-man-soccer-player-graphic-vector-9422091.jpg")
                      }
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                      alt="post-img"
                    />
                    <strong>
                      <p>{post.name}</p>
                    </strong>
                  </div>
                </Col>
                <Col md={6}>
                  <strong>
                    <p>{post._id}</p>
                  </strong>
                  <p>{post.text}</p>
                </Col>
                <Col md={2}>
                  {isAuthenticated && user.isAdmin && (
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(post._id)}
                    >
                      <i className="fa fa-trash"></i>
                    </Button>
                  )}
                </Col>
              </>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post,
});

export default connect(mapStateToProps, { getPosts, deletePostAdmin })(
  AdminPosts
);
