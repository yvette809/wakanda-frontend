import React, { useState } from "react";
import coach from "../images/coach.jpg";
import mike from "../images/mike.jpg";
import mgr from "../images/mgr.jpg";
import chm from "../images/chm.jpg";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaResolving } from "react-icons/fa";

const Staff = () => {
  const [openButton, toggleOpenButton] = useState(false);
  const [openButton1, toggleOpenButton1] = useState(false);
  const [openButton2, toggleOpenButton2] = useState(false);
  const [openButton3, toggleOpenButton3] = useState(false);

  // set time out for button
  setTimeout(() => {
    toggleOpenButton();
  }, 7000);

  setTimeout(() => {
    toggleOpenButton1();
  }, 7000);

  setTimeout(() => {
    toggleOpenButton2();
  }, 7000);

  setTimeout(() => {
    toggleOpenButton3();
  }, 7000);

  return (
    <Container fluid className="mb-4 staff_section ">
      <div className="text-center my-4">
        <FaResolving
          className="fa_about bg-danger mb-4"
          style={{ fontSize: "5rem", padding: "15px", borderRadius: "50%" }}
        />
        <h1>The Driving Force</h1>
      </div>
      <Row>
        <Col xs={12} md={6} lg={3}>
          <div className="cards-wrapper">
            <div className="card">
              <div className="card-img-wrapper">
                <img src={chm} alt="" />
              </div>
              <div className="card-info">
                <strong>Emmanuel Mukumu</strong>
                <h3>Mukumu is an ex-referee and the chairman of WSK.</h3>
                <blockquote className="text-danger font-weight-bolder">
                  "I am committed to make WSK a safe haven"
                </blockquote>
                {openButton && (
                <>
                  <a href="https://www.facebook.com/sirmukumu">
                    <i className="fa fa-2x fa-facebook mr-3"></i>
                  </a>
                  <a href="https://twitter.com/peryline">
                    <i className="fa fa-2x fa-twitter  mr-3"></i>
                  </a>

                  <a href="https://www.instagram.com/evebabe2006/?hl=en">
                    <i className="fa fa-2x fa-instagram "></i>
                  </a>
                </>
              )}

              <Button
                variant="primary"
                onClick={(e) => toggleOpenButton(true)}
                className="ml-2 staff_button"
              >
                Connect...
              </Button>
              </div>
            </div>
          </div>
        </Col>

        
        <Col xs={12} md={6} lg={3}>
          <div className="cards-wrapper">
            <div className="card">
              <div className="card-img-wrapper">
                <img src={mgr} alt="" />
              </div>
              <div className="card-info">
                <strong>Ngwa MCDonald</strong>
                <h3>Mgr of WSK.</h3>
                <blockquote className="text-danger font-weight-bolder">
                The only impossible thing is the one which doesn't exist
                </blockquote>
                {openButton1 && (
                <>
                  <a href="https://www.facebook.com/ngwa.macdonald.3">
                    <i className="fa fa-2x fa-facebook  mr-3"></i>
                  </a>
                  <a href="https://twitter.com/peryline">
                    <i className="fa fa-2x fa-twitter  mr-3"></i>
                  </a>

                  <a href="https://www.instagram.com/evebabe2006/?hl=en">
                    <i className="fa fa-2x fa-instagram "></i>
                  </a>
                </>
              )}

              <Button
                variant="primary"
                onClick={(e) => toggleOpenButton1(true)}
                className="ml-2 staff_button"
              >
                Connect ...
              </Button>
              </div>
            </div>
          </div>
        
        </Col>
        <Col xs={12} md={6} lg={3}>
        <div className="cards-wrapper">
            <div className="card">
              <div className="card-img-wrapper">
                <img src={coach} alt="" />
              </div>
              <div className="card-info">
                <strong>Ojong Roland</strong>
                <h3> Ojong is an ex-footballer and the coach of WSK</h3>
                <blockquote className="text-danger font-weight-bolder">
                "The future belongs to us. We are going to change Things"
                </blockquote>
                {openButton2 && (
                <>
                  <a href="https://www.facebook.com/ojong.roland">
                    <i className="fa fa-2x fa-facebook  mr-3"></i>
                  </a>
                  <a href="https://twitter.com/peryline">
                    <i className="fa fa-2x fa-twitter  mr-3"></i>
                  </a>

                  <a href="https://www.instagram.com/evebabe2006/?hl=en">
                    <i className="fa fa-2x fa-instagram "></i>
                  </a>
                </>
              )}

              <Button
                variant="primary"
                onClick={(e) => toggleOpenButton2(true)}
                className="ml-3 staff_button "
              >
                Connect ...
              </Button>
                
         
             </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
        <div className="cards-wrapper">
            <div className="card">
              <div className="card-img-wrapper">
                <img src={mike} alt="" />
              </div>
              <div className="card-info">
                <strong>Sidibe Mike</strong>
                <h3> Mike is an experienced footballer and the assistant coach of WSK</h3>
                <blockquote className="text-danger font-weight-bolder">
                "If I don't score, I stop playing football"
                </blockquote>
                {openButton3 && (
                <>
                  <a href="https://www.facebook.com/michael.sidibe.94">
                    <i className="fa fa-2x fa-facebook mr-3"></i>
                  </a>
                  <a href="https://twitter.com/peryline">
                    <i className="fa fa-2x fa-twitter  mr-3"></i>
                  </a>

                  <a href="https://www.instagram.com/evebabe2006/?hl=en">
                    <i className="fa fa-2x fa-instagram "></i>
                  </a>
                </>
              )}

              <Button
                variant="primary"
                onClick={(e) => toggleOpenButton3(true)}
                className="ml-2 staff_button"
              >
                Connect ...
              </Button>
              </div>
              </div>
              </div>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Staff;
