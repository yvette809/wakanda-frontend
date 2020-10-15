import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { FaTshirt, FaUtensils, FaPray } from "react-icons/fa";

const Kids = () => {
  return (
    <>
      <div id="kids_sessions" className="mb-5">
        <div className="img_overlay">
          <Container className="mb-5 text-center kids_container">
            <div className="intro_header">
              <h1 className="text-white font-weight-bolder">FAQS</h1>
              <h1 className="text-white">
                Things You Should Know Before Sending your kids
              </h1>
              <Button>Book A KID SESSION</Button>
            </div>
          </Container>
        </div>
      </div>
      <Container className=" text-center ">
        <div className="first_day">
          <h1
            className=" font-weight-bolder mt-5 "
            style={{ color: "teal" }}
          >
            YOUR FIRST DAY WITH US
          </h1>
          <h2 className="mb-3">Things You should Know</h2>
        </div>

        <Row>
          <Col lg={6} className="mb-2 ">
            <Card style={{ width: "30rem" }} className="border-0 kids_card">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <i
                    class="fa fa-info-circle bg-danger text-white mb-3"
                    style={{
                      fontSize: "3rem",
                      padding: "15px",
                      borderRadius: "50%",
                    }}
                  ></i>
                  <h2 className="instructions mb-2">FIRST THINGS FIRST</h2>
                </Card.Title>

                <Card.Text>
                  <p className="more_instructions mb-3">
                    We advice you bring your kids atleast 15- 20 mins before
                    time to give us time to check all the formalities. We need
                    to know if the kid is properly dressed up for training.We
                    offer free classes for the first time but subsequent classes
                    cost 150kr/hr as seen in the booking
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-2">
            <Card style={{ width: "30rem" }} className="border-0 kids_card">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <FaTshirt
                    className="fa_about bg-danger mb-3"
                    style={{
                      fontSize: "5rem",
                      padding: "15px",
                      borderRadius: "50%",
                    }}
                  />
                  <h2 className="instructions mb-2">ATTIRE</h2>
                </Card.Title>

                <Card.Text>
                  <p className="more_instructions mb-3">
                    It is very important to dress the kids up properly for
                    training. If it is a very warm day, we advice you dress them
                    in light clothes but in the winter, make sure they have warm
                    leggings inside. We train indoorsin the winter due to the
                    unfavourable climatic conditions
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="mb-2 ">
            <Card style={{ width: "30rem" }} className="border-0 kids_card">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <FaUtensils
                    className="fa_about bg-danger mb-3"
                    style={{
                      fontSize: "5rem",
                      padding: "15px",
                      borderRadius: "50%",
                    }}
                  />
                  <h2 className="instructions mb-2">FOOD AND WATER</h2>
                </Card.Title>

                <Card.Text>
                  <p className="more_instructions mb-3">
                    We advice the parents to make sure their kids don't eat
                    anything atleast two hours before the training session.
                    Drink Water! Have small sips of water frequently during the
                    day before and after the class. They can also bring their
                    water bottles inside the class room and dring during short
                    breaks.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-2">
            <Card style={{ width: "30rem" }} className="border-0 kids_card">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <FaPray
                    className="fa_about bg-danger mb-3"
                    style={{
                      fontSize: "5rem",
                      padding: "15px",
                      borderRadius: "50%",
                    }}
                  />
                  <h2 className="instructions mb-2">LISTEN TO YOUR BODY</h2>
                </Card.Title>

                <Card.Text>
                  <p className="more_instructions mb-3">
                    During the trainings, we take as many breaks as we deem
                    necessary depending on how the kids feel. We make sure no
                    kid leaves the seesion without permission or due consent
                    from their parents
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="offset-lg-3 rules_col">
            <Card style={{ width: "30rem" }} className="border-0 kids_card">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <i
                    class="fa fa-info-circle bg-danger text-white mb-3"
                    style={{
                      fontSize: "3rem",
                      padding: "15px",
                      borderRadius: "50%",
                    }}
                  ></i>
                  <h2 className="instructions mb-2">BASIC RULES</h2>
                </Card.Title>

                <Card.Text>
                  <ul id="rules" className="more_instructions">
                    <li>Please arrive on time</li>
                    <li>
                      Avoid strong smells like perfumes and do not come to the
                      training with nuts
                    </li>
                    <li>
                      Do not stop training before time. If you feel like yu
                      can't continue, take permission from the coach and sit
                      down.WE don't encourage distraction
                    </li>
                    <li>
                      Take quick shower because other people need to use the
                      facility
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Kids;
