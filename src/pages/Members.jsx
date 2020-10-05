import React from "react";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Membership = () => {
  return (
    <Container fluid className=" jumbos">
      <div className="registration_info text-center align-content-between">
        <h1 className="text-white text-center">Meet our Team</h1>
        <div>
          <Link to="/login">
            <button className="membership btn-lg justify-content-center align-items-center">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* <p>
            At WSK, we take things seriously.It is for this reason we welcome
            only registered members
      </p> 
          <p>Annula membership fees : 300kr</p>
          <h3>The benefits of registration include:</h3>
          <ul className="d-inline-flex mr-5">
            <span>
              <i className="fa  fa-2x  fa-angle-double-right mr-2"></i>
            </span>
            <span>
              <li>Free Access to The WSK Training facility</li>
            </span>
            <span>
              <i className="fa  fa-2x  fa-angle-double-right mr-2"></i>
            </span>
            <span>
              <li>Access to free training sessions</li>
            </span>
            <span>
              <i className="fa  fa-2x  fa-angle-double-right mr-2"></i>
            </span>
            <span>
              <li>Opportunity to work with our qualified coaches</li>
            </span>
            <span>
              <i className="fa  fa-2x  fa-angle-double-right mr-2"></i>
            </span>
            <span>
              <li>Free Integration advice from our mentors</li>
            </span>
            <span>
              <i className="fa  fa-2x  fa-angle-double-right mr-2"></i>
            </span>
            <span>
              <li>Opportunity to meet other sports lovers</li>
            </span>
          </ul> */}
    </Container>
  );
};

export default Membership;
