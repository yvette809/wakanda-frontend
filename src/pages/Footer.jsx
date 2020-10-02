import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/wlogo.jpg";

const Footer = () => {
  return (
    <footer>
      <div className=" container py-3">
        <div className="row d-flex-inline text-white">
          <div className="col-sm-3">
            <h3 className="text-white">Contact Us</h3>
            <p className="contact-link text-white">Tel:(0046) 760726885</p>
            <div className=" footer-social">
              <a href="https://www.facebook.com/tanila.yvette">
                <i className="fa fa-2x fa-facebook text-white mr-3"></i>
              </a>

              <a href="https://twitter.com/peryline">
                <i className="fa fa-2x fa-twitter text-white mr-3"></i>
              </a>

              <a href="https://www.instagram.com/evebabe2006/?hl=en">
                <i class="fa fa-2x fa-instagram text-white"></i>
              </a>
            </div>
          </div>
          <div className="col-sm-3">
            <div className=" footer-social">
              <ul>
                <Link to="/">
                  <li className="py-2">Home</li>
                </Link>
                <Link to="/mission">
                  <li className="py-2">About us</li>
                </Link>
                <Link to="/testimonials">
                  <li>Testimonials</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className=" footer-social">
              <ul>
                <Link to="/membership">
                  <li className="py-2">Membership</li>
                </Link>
                <Link to="/register">
                  <li className="py-2">Register</li>
                </Link>
                <Link to="/events">
                  <li className="py-2">
                    Stay Updated
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col col-sm-3">
            <Link to="/">
              <img
                src={logo}
                alt="wsk logo"
                style={{ width: "50%", padding: "0" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
