import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

const Basket = () => {
  return (
    <>
      <div id="basket_sessions" className="mb-5">
        <div className="basket_overlay">
          <Container className="mb-5 text-center">
            <h1 className="text-white font-weight-bolder">FAQS</h1>
            <h1 className="text-white">
            Things You Should Know Before Coming for Trainings
            </h1>
            <Button>COME TRAIN WITH US</Button>
          </Container>
        </div>
      </div>
      <Container className=" text-center ">
        <h1 className=" font-weight-bolder mt-5" style={{ color: "teal" }}>
          YOUR FIRST DAY WITH US
        </h1>
        <h2 className="mb-3">Things You should Know</h2>
        <Row>
          <Col lg={6} className="mb-2">
            <Card style={{ width: "30rem" }} className="border-0">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h2 className="instructions mb-2">Things You Should Know Before Coming for Trainings</h2>
                </Card.Title>

                <Card.Text>
                  <p className="more_instructions mb-3">
                    We have free basketball trainings every wednesday from{" "}
                    <strong>17.00-19.00 </strong>and saturdays from{" "}
                    <strong>12.00-14.00 </strong>. It is important to come
                    atleast 15 minutes before time in other for proper game
                    planning
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-2">
            <Card style={{ width: "30rem" }} className="border-0">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h2 className="instructions mb-2">ATTIRE</h2>
                </Card.Title>

                <Card.Text>
                  <p className="more_instructions mb-3">
                    We advice you to dres up appropriately. If is a very warm
                    day, remember to put on light clothes and warm sneakers. In
                    the winter, we train indoors so you are adviced to put on
                    warm clothes when tepping out. It is very warm indoors so
                    you change clothes inside
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="mb-2 ">
            <Card style={{ width: "30rem" }} className="border-0">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h2 className="instructions mb-2">FOOD AND WATER</h2>
                </Card.Title>

                <Card.Text>
                  <p className="more_instructions mb-3">
                    We advice you not to eat anything atleast two hours before
                    the sessions since the games can get very intense sometimes.
                    Have small sips of water frequently during the day before
                    and after the session. You can also bring your water bottles
                    in the trainings. We constantly take short breaks so feel to
                    drink water any time.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-2">
            <Card style={{ width: "30rem" }} className="border-0">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h2 className="instructions mb-2">LISTEN TO YOUR BODY</h2>
                </Card.Title>

                <Card.Text>
                  <p className="more_instructions mb-3">
                    During the trainings, we take as many breaks as we deem
                    necessary depending on how intense the game is . We are very disciplined and won't tolerate indiscipline. This means you cannot walk out of the session as you want without permission.One of our core values is to uphold good moral and respect.For any act of indiscipline, remember you will be called up by our disciplinary committee
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="offset-3">
            <Card style={{ width: "30rem" }} className="border-0" >
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h2 className="instructions mb-2">BASIC RULES</h2>
                </Card.Title>

                <Card.Text>
                  <ul id="rules" className="more_instructions">
                    <li>Please arrive on time</li>
                    <li>
                      Avoid strong smells like perfumes, chemicals and cigarettes since many players ca be allergic to such.
                    </li>
                    <li>
                      Do not stop training before time. If you feel like yu
                      can't continue, take permission from the coach and sit
                      down.We don't encourage distraction
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

export default Basket;