import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/wlogo.png";

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
                  <li className="">Home</li>
                </Link>
                <Link to="/mission">
                  <li className="">About us</li>
                </Link>
                <Link to="/testimonials">
                  <li className="">Testimonials</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-sm-3  footer_item">
            <div className=" footer-social">
              <ul>
                <Link to="/members">
                  <li className="">Members</li>
                </Link>
                <Link to="/register">
                  <li className="">Register</li>
                </Link>
                <Link to="/events">
                  <li className="">Stay Updated</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col col-sm-3  footer_item">
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
