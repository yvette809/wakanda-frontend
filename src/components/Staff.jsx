import React, { useState } from "react";
import coach from "../images/coach.jpg";
import mike from "../images/mike.jpg";
import mgr from "../images/mgr.jpg";
import chm from "../images/chm.jpg"
import { Container, Row, Col,  Card, Button } from "react-bootstrap";
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
        <h1 >The Driving Force</h1>
      </div>
      <Row>
        <Col xs={12} md={6} lg={3}>
        <Card style={{ width: '18rem' }} className="mb-3" >
  <Card.Img variant="top" src={mgr} style={{height: "35vh"}}/>
  <Card.Body>
    <Card.Title><strong>Emmanuel Mukumu</strong></Card.Title>
    <Card.Text>
      Mukumu is an ex-referee and the chairman of WSK.
    </Card.Text>
    <Card.Text>
    <blockquote className="text-danger font-weight-bolder">
              "I am committed to make WSK a safe haven"
            </blockquote>
    </Card.Text>
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
           
    <Button variant="primary"   onClick={(e) => toggleOpenButton(true)} className="ml-2 staff_button">Connect...</Button>
  </Card.Body>
</Card>
        </Col>
      
        <Col xs={12} md={6} lg={3}>
        <Card style={{ width: '18rem' }}  className="mb-3">
  <Card.Img variant="top" src={mgr} style={{height: "35vh"}}/>
  <Card.Body>
    <Card.Title><strong>Ngwa McDonald</strong></Card.Title>
    <Card.Text>
      McDonald is the Team Manager of WSK.
    </Card.Text>
    <Card.Text>
    <blockquote className="text-danger font-weight-bolder">
    "The only impossible thing is the one which doesn't exist"
            </blockquote>
    </Card.Text>
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
           
          <Button variant="primary"  onClick={(e) => toggleOpenButton1(true)}  className="ml-2 staff_button">Connect ...</Button>
        </Card.Body>
</Card>
        </Col>
        <Col xs={12} md={6} lg={3}>
        <Card style={{ width: '18rem' }}   className="mb-3">
  <Card.Img variant="top" src={coach} style={{height: "35vh"}}/>
  <Card.Body>
    <Card.Title><strong>Ojong Roland</strong></Card.Title>
    <Card.Text>
     Ojong is an ex-footballer and the coach of WSK
    </Card.Text>
    <Card.Text>
    <blockquote className="text-danger font-weight-bolder">
    "The future belongs to us. We are going to change Things"
            </blockquote>
    </Card.Text>
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
           
        <Button variant="primary"  onClick={(e) => toggleOpenButton2(true)} className="ml-3 staff_button ">Connect ...</Button>
       </Card.Body>
       </Card>
        </Col>
        <Col xs={12} md={6} lg={3}>
        <Card style={{ width: '18rem' }}  className="mb-3">
  <Card.Img variant="top" src={mike} style={{height: "35vh"}}/>
  <Card.Body>
    <Card.Title><strong>Sidibe Michael</strong></Card.Title>
    <Card.Text>
      Mike is an experienced footballer and the assistant coach of WSK
    </Card.Text>
    <Card.Text>
    <blockquote className="text-danger font-weight-bolder">
    "If I don't score, I stop playing football"
      </blockquote>
    </Card.Text>
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
           
      <Button variant="primary" onClick={(e) => toggleOpenButton3(true)} className="ml-2 staff_button">Connect ...</Button>
      </Card.Body>
         </Card>
     </Col>
      </Row>
    </Container>
  );
};

export default Staff;
