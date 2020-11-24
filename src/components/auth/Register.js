import React, { useState } from "react";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, username, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, username, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container style={{ marginTop: "80px" }} className="text-primary">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1 className="  py-3">Sign Up</h1>
          <p className="lead">
            <i className="fa fa-user" /> Create Your Account
          </p>

          <Form onSubmit={onSubmit}>
            <FormControl
              type="text"
              value={name}
              name="name"
              placeholder="Name"
              onChange={onChange}
              className="mb-4 py-3 "
            />
            <FormControl
              type="text"
              value={username}
              name="username"
              placeholder="username"
              onChange={onChange}
              className="mb-4 py-3 "
            />
            <FormControl
              type="email"
              value={email}
              name="email"
              placeholder="Email Address"
              onChange={onChange}
              className="mb-4 py-3"
            />
            <FormControl
              type="password"
              value={password}
              name="password"
              placeholder="password"
              className="mb-4 py-3 "
              onChange={onChange}
              required
            />
            <FormControl
              type="password"
              value={password2}
              name="password2"
              placeholder="confirm password"
              className="mb-4 py-3 "
              onChange={onChange}
            />

            <input
              type="submit"
              className="btn btn-primary"
              value="Register"
              onClick={onSubmit}
            />
          </Form>
          <p className="my-1">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
