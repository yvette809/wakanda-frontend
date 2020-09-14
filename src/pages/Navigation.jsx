import React, { Component } from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../src/wlogo.jpg";
import "../../src/App.css";

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="" expand="lg" className="navigation ">
        <Link to="/">
          <Navbar.Brand href="#home">
            <img src={logo} alt="wakanda logo" style={{ width: "12%" }} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto d-flex justify-content-start align-items-start">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/mission" className="nav-link">
              Mission
            </Link>
            <Link to="/membership" className="nav-link">
              Membership
            </Link>
            <Link to="/news" className="nav-link">
              News
            </Link>
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
          </Nav>
          <Form inline>
            <Link to="register"><Button variant="outline-success">Register</Button></Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
