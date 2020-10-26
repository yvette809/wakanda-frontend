import React, { useState } from "react";
import coach from "../images/coach.jpg";
import mike from "../images/mike.jpg";
import tmgr from "../images/mgr.jpg";
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
  }, 10000);

  setTimeout(() => {
    toggleOpenButton1();
  }, 10000);

  setTimeout(() => {
    toggleOpenButton2();
  }, 10000);

  setTimeout(() => {
    toggleOpenButton3();
  }, 10000);

  return (
    <Container fluid className="mb-4 staff_section ">
      <div className="text-center my-4">
        <FaResolving
          className="fa_about bg-danger mb-4"
          style={{ fontSize: "5rem", padding: "15px", borderRadius: "50%" }}
        />
        <h1 className="text-white">The Driving Force</h1>
      </div>
      <div >
        <Row className=" text-white mt-3 staff_row justify-content-sm-center align-content-sm-center d-flex ">
          <Col md={6} xs={12} className= "mb-2" style={{height:"800px"}}>
            <Card
                 style={{ width: "25rem",  maxHeight:"800px" ,objectFit:"cover", overflow:"hidden"}}
              id="cards"
            >
              <Card.Img
                className="img-fluid "
                variant="top"
                src={tmgr}
                style={{objectFit:"cover", overflow:"hidden"}}
              />
              <Card.Body>
                <div >
                <h4 className="text-dark">
                      <strong>Name:</strong> Emmanuel Mukumu
                    </h4>
                    <p   className="text-dark">
                      <strong>Title:</strong> Chairman
                    </p>
                </div>
                <div id="cd1">
                  <Card.Text id="cd2" className="">
              
                    <blockquote className="text-danger font-weight-bolder">
                      "I am committed to make WSK a safe haven"
                    </blockquote>

                    {openButton && <>
                      <a href="https://www.facebook.com/ngwa.macdonald.3">
                          <i className="fa fa-2x fa-facebook text-dark mr-3"></i>
                        </a>
                        <a href="https://twitter.com/peryline">
                          <i className="fa fa-2x fa-twitter text-dark mr-3"></i>
                        </a>

                        <a href="https://www.instagram.com/evebabe2006/?hl=en">
                          <i className="fa fa-2x fa-instagram text-dark"></i>
                        </a>
                    </>}

                    <Button
                      onClick={(e) => toggleOpenButton(true)}
                      className="ml-3 staff_button bg-danger"
                    >
                      Connect...
                    </Button>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xs={12} classname= "mb-2" style={{height:"800px"}}>
            <Card
                 style={{ width: "25rem",  maxHeight:"800px",  overflow:"hidden", objectFit:"cover"}}  
            >
              <Card.Img variant="top" src={tmgr} className="img-fluid " />
              <Card.Body>
                <div >
                   <h4 className="text-dark">
                      {" "}
                      <strong>Name:</strong> Ngwa McDonald
                    </h4>
                     <p className = "text-dark">
                      <strong>Title:</strong> Team Manager
                    </p> 
                    </div>
                <div id="cd1" className="text-dark">
                  <Card.Text id="cd2" >
  
                    <blockquote className="text-danger font-weight-bolder">
                      "The only impossible thing is the one which doesn't exist"
                    </blockquote>

                    {openButton1 && (
                      <>
                        <a href="https://www.facebook.com/ngwa.macdonald.3">
                          <i className="fa fa-2x fa-facebook text-dark mr-3"></i>
                        </a>
                        <a href="https://twitter.com/peryline">
                          <i className="fa fa-2x fa-twitter text-dark mr-3"></i>
                        </a>

                        <a href="https://www.instagram.com/evebabe2006/?hl=en">
                          <i className="fa fa-2x fa-instagram text-dark"></i>
                        </a>
                      </>
                    )}

                    <button
                      onClick={(e) => toggleOpenButton1(true)}
                      className="ml-3 staff_button bg-danger"
                    >
                      Connect...
                    </button>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-3  text-white staff_row">
          <Col md={6} xs={12} style={{height:"800px"}}>
            <Card
               style={{ width: "25rem", maxHeight:"800px", overflow:"hidden",objectFit:"cover"}}
            >
              <Card.Img fluid variant="top" src={coach} className="rounded" style={{objectFit:"cover", overflow:"hidden"}}/>
              <Card.Body>
                <div >
                <h4 className="text-dark">
                      {" "}
                      <strong>Name:</strong>Ojong Roland.O
                    </h4>
                    <p className = "text-dark">
                      <strong>Title:</strong> Head Coach
                    </p>
                  
                </div>
                <div id="cd1" >
                  <Card.Text id="cd2" className=" ">
                   
                    <blockquote className="text-danger font-weight-bolder">
                      "Giving up is not an option.I am commited in taking WSK to
                      the championship"
                    </blockquote>
                    {openButton2 && (
                      <>
                        <a href="https://www.facebook.com/ojong.roland">
                          <i className="fa fa-2x fa-facebook text-dark mr-3"></i>
                        </a>
                        <a href="https://twitter.com/peryline">
                          <i className="fa fa-2x fa-twitter text-dark mr-3"></i>
                        </a>

                        <a href="https://www.instagram.com/evebabe2006/?hl=en">
                          <i className="fa fa-2x fa-instagram text-dark"></i>
                        </a>
                      </>
                    )}

                    <button
                      onClick={(e) => toggleOpenButton2(true)}
                      className="ml-3 staff_button bg-danger"
                    >
                      Connect...
                    </button>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xs={12} style={{height:"800px"}} >
            <Card
              style={{ width: "25rem" ,  maxHeight:"800px", overflow:"hidden", objectFit:"cover"}}
            >
              <Card.Img fluid variant="top" src={mike}  />
              <Card.Body>
                <div>
                <h4 className = "text-dark">
                      {" "}
                      <strong>Name:</strong> Sidibe Michael
                    </h4>
                    <p className = "text-dark">
                      <strong>Title:</strong> Assistant Coach
                    </p>
                </div>
                <div id="cd1" style={{objectFit:"cover"}}>
                  <Card.Text id="cd2" className="">
                   
              
                    <blockquote className="text-danger font-weight-bolder">
                      "If I don't score, I stop playing football"
                    </blockquote>
                    {openButton3 && (
                      <>
                        <a href="https://www.facebook.com/michael.sidibe.94">
                          <i className="fa fa-3x fa-facebook text-dark mr-3"></i>
                        </a>
                        <a href="https://twitter.com/peryline">
                          <i className="fa fa-3x fa-twitter text-dark mr-3"></i>
                        </a>

                        <a href="https://www.instagram.com/evebabe2006/?hl=en">
                          <i className="fa fa-3x fa-instagram text-dark"></i>
                        </a>
                      </>
                    )}

                    <button
                      onClick={(e) => toggleOpenButton3(true)}
                      className=" staff_button bg-danger"
                    >
                      Connect...
                    </button>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Staff;
