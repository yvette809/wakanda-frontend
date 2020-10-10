import React, {useEffect} from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Membership = () => {

  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div id="members_sessions" className="mb-5 d-flex ">
        <div className="members_overlay">
          <Container className="mb-5 text-center">
            <Button className= "members_button">Register With Us</Button>
          </Container>
        </div>
      </div>
      <Container>
        <Row>
          <Col lg={4}>
            <Card style={{ width: "20rem" }} id="members_card" data-aos="flip-down">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h2 className="instructions mb-2">TRY IT OUT</h2>
                </Card.Title>

                <Card.Text>
                  <p className="more_instructions mb-3">
                    If you are unsure of our services, we give you the
                    opportunity to try it first for 3 consecutive times before
                    deciding to be part of the club. After this trial period, if
                    you do not register, you are no longer welcome. This is
                    because we take accountability of every member's safety
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card style={{ width: "20rem" }} className="border-0" id="members_card" data-aos="flip-down">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h2 className="instructions mb-2">ADULT REGISTRATION</h2>
                </Card.Title>
                <Card.Text>
                  <div className="more_instructions mb-3">
                    <p>
                      Registration for members from 18 years and above is
                      compulsory after the 3-day trial period
                    </p>
                    <p>
                      -Annual membership fees:<strong>300kr</strong>
                    </p>

                    <p>- Free Access to The WSK Training facility</p>

                    <p>-Access to free training sessions</p>

                    <p>- Opportunity to work with our qualified coaches</p>

                    <p>- Free Integration advice from our mentors</p>
                    <p>
                      - Opportunity to vote during our Anuual General Meetings
                    </p>

                    <p>- Opportunity to meet other sports lovers</p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card style={{ width: "20rem" }} className="border-0" id="members_card" data-aos="flip-down">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h2 className="instructions mb-2">KIDS REGISTRATION</h2>
                </Card.Title>
                <Card.Text>
                  <div className="more_instructions mb-3">
                    <p>
                      Registration for members from 0-18 years for the kids club
                      is not compulsory but cheaper when you are a registered
                      member. If not, You pay for your kids per session
                    </p>
                    <p>
                      -Annual membership fees:<strong>700kr</strong>
                    </p>

                    <p>- Free Access to The WSK Training facility</p>

                    <p>-Access to free training sessions</p>

                    <p>- Opportunity to work with our qualified coaches</p>

                    <p>
                      - Opportunity to mingle with other kids and grow
                      professionally
                    </p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
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
          </ul>  */}
      </Container>
    </>
  );

  {
    /* <p>
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
          </ul> */
  }
  // </Container>
};

export default Membership;
