import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import logo from "../images/logo.jpg";
import "../../src/App.css";

const Navigation = ({ auth: { isAuthenticated }, logout }) => {
  console.log("is authenticated is", isAuthenticated);
  const authLinks = (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Link to="/">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="wakanda logo"
              style={{
                width: "10%",
              }}
            />
          </Navbar.Brand>
        </Link>
        <Nav className="mr-auto d-flex justify-content-start align-items-start">
          <Link to="/news" className="nav-link">
            News
          </Link>
          <Link to="/profiles" className="nav-link">
            Players
          </Link>
          <Link to="/posts" className="nav-link">
            Posts
          </Link>
          <Link to="/" onClick={logout} className="nav-link">
            <i className="fa fa-sign-out">Logout</i>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );

  const guestLinks = (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Link to="/">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="wakanda logo"
              style={{
                width: "12%",
              }}
            />
          </Navbar.Brand>
        </Link>
        <Nav className="mr-auto d-flex justify-content-start align-items-start">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/profiles" className="nav-link">
            Players
          </Link>
          <Link to="/mission" className="nav-link">
            Mission
          </Link>
          <Link to="/members" className="nav-link">
            Members
          </Link>

          <Link to="/login" className="nav-link">
            login
          </Link>
        </Nav>
        <Form inline>
          <Link to="/register">
            <Button variant="outline-primary">Register</Button>
          </Link>
        </Form>
      </Navbar.Collapse>
    </>
  );

  console.log("==>", isAuthenticated);
  return (
    <Navbar bg="" expand="lg" className="navigation ">
      <>{isAuthenticated ? authLinks : guestLinks}</>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navigation);
