import React from "react";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import logo from "../images/wlogo.png";
import "../../src/App.css";

const Navigation = ({ auth: { isAuthenticated, user }, logout }) => {
  console.log("is authenticated is", isAuthenticated);

  const authLinks = (
    <>
      <Link to="/" className="navbar-brand">
        <img
          src={logo}
          alt="wakanda logo"
          className="img-fluid "
          style={{
            height: "auto",
            width: "10%",
          }}
        />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="ml-auto d-flex justify-content-end align-items-end"
          id="navi"
        >
          <Link to="/news" className="nav-link">
            News
          </Link>
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link to="/profiles" className="nav-link">
            Players
          </Link>
          <Link to="/posts" className="nav-link">
            Posts
          </Link>
          {/* <Link to="/messages" className="nav-link">
            Messages
          </Link> */}
          <Link to={`/profile/${user._id}`}>
            <img
              src={` https://vast-bayou-47622.herokuapp.com/profiles/${
                user && user._id
              }.png`}
              onError={(e) =>
                (e.target.src =
                  "https://cdn2.vectorstock.com/i/1000x1000/20/91/avatar-man-soccer-player-graphic-vector-9422091.jpg")
              }
              alt="user picture"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              className="mb-2"
            />
          </Link>
          <NavDropdown title={user.name} id="username">
            <LinkContainer to={`/profile/${user._id}`}>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/">
              <NavDropdown.Item onClick={logout}>
                <i className="fa fa-sign-out">Logout</i>
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>

          {isAuthenticated && user.isAdmin && (
            <NavDropdown title="Admin" id="adminmenu">
              <LinkContainer to="/admin/profiles">
                <NavDropdown.Item>Players</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/Events">
                <NavDropdown.Item>Events</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/posts">
                <NavDropdown.Item>Posts</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          )}
        </Nav>
      </Navbar.Collapse>
    </>
  );

  const guestLinks = (
    <>
      <Link to="/" className="navbar-brand">
        {/* <Navbar.Brand href="#home"> */}
        <img
          src={logo}
          alt="wakanda logo"
          style={{
            width: "12%",
          }}
        />
        {/* </Navbar.Brand> */}
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" ml-auto d-flex justify-content-lg-end " id="nav_links">
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
            Membership
          </Link>

          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );

  return (
    <Navbar bg="" expand="lg" className="navigation fixed-top">
      <>{isAuthenticated ? authLinks : guestLinks}</>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navigation);
