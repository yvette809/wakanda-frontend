import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/wlogo.png";
import logo1 from "../images/logo1.png";

const Footer = () => {
  return (
    <footer>
      <div className=" container-fluid py-3" id ="footer_container">
        <div className="row d-flex-inline text-white footer">
          <div className="col-sm-3 footer_item ">
            <ul>
              <li className="contact-link text-white">
                <i className="fa fa-2x fa-phone-square mr-2 fa_icon "></i>
                (0046) 760726885
              </li>

              <li className="text-white contact-link">
                <i className="fa fa-2x fa-envelope-square mr-2 fa_icon "></i>
                info@wsk@gmail.com
              </li>
              <div className=" footer-social d-flex justify-content-lg-start ">
                <li className="contact-link">
                  <a href="https://www.facebook.com/tanila.yvette">
                    <i className="fa fa-2x fa-facebook text-white mr-3 "></i>
                  </a>
                </li>

                <li className="contact-link">
                  <a href="https://twitter.com/peryline">
                    <i className="fa fa-2x fa-twitter text-white mr-3"></i>
                  </a>
                </li>

                <li className="contact-link">
                  <a href="https://www.instagram.com/evebabe2006/?hl=en">
                    <i className="fa fa-2x fa-instagram text-white"></i>
                  </a>
                </li>
              </div>
            </ul>
          </div>

          <div className="col-sm-3  footer_item ">
            <div className=" footer-social">
              <ul>
                <Link to="/">
                  <li className="text-white">Home</li>
                </Link>
                <Link to="/mission">
                  <li className="text-white">About us</li>
                </Link>
                <Link to="/testimonials">
                  <li className="text-white">Testimonials</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-sm-3  footer_item">
            <div className=" footer-social">
              <ul>
                <Link to="/members">
                  <li className="text-white">Members</li>
                </Link>
                <Link to="/register">
                  <li className="text-white">Register</li>
                </Link>
                <Link to="/events">
                  <li className="text-white">Stay Updated</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col col-sm-3 primary_logo footer_item">
            <Link to="/">
              <img
                src={logo1}
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
