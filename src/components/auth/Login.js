import React, { useState } from "react";
import { Container, Form, FormControl } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/news" />;
  }

  return (
    <Container className="mb-5" style={{ marginTop: "200px" }}>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fa fa-user" /> Sign Into Your Account
      </p>

      <Form onSubmit={onSubmit} className="">
        <FormControl
          type="email"
          value={email}
          name="email"
          onChange={onChange}
          style={{ width: "50%" }}
          className="mb-4"
        />
        <FormControl
          type="password"
          value={password}
          name="password"
          onChange={onChange}
          style={{ width: "50%" }}
          className="mb-4"
        />
        <input type="submit" className="btn btn-primary" value="Login" />
      </Form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
