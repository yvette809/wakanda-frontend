import React, { useState } from "react";
import coach from "../images/coach.jpg";
import mike from "../images/mike.jpg";
import mgr from "../images/mgr.jpg";
import chm from "../images/chm.jpg"
import { Container, Row, Col } from "react-bootstrap";
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
        <h1 className="text-white">The Driving Force</h1>
      </div>

      <Row className=" text-white mt-3 staff_row ">
        <Col xs={12} lg={4} className="mb-3">
          <div classname="card " id="staff_1 ">
            <img
              src={chm}
              alt="chairman"
              className="img-fluid"
              style={{borderRadius: "50%", height:"50vh"}}
            />
          </div>
        </Col>
        <Col xs={12} lg={6} className="text-dark " data-aos="flip-down">
          <div className="staff_profile">
            <h4>
              {" "}
              <strong>Name:</strong> Emmanuel Mukumu
            </h4>
            <p>
              <strong>Title:</strong> Chairman
            </p>
            <p>
              <strong>Profile:</strong> Emmanuel Mukumu is the pioneer of the
              Wakana idea.He is very educated and has great leaership
              experience.As a former referee in Sweden, he thinks the best place
              to serve is at WSK.
            </p>
            <blockquote className="text-danger font-weight-bolder">
              "I am committed to make WSK a safe haven"
            </blockquote>
            {openButton1 && (
              <>
                <a href="https://www.facebook.com/sirmukumu">
                  <i className="fa fa-3x fa-facebook text-white mr-3"></i>
                </a>
                <a href="https://twitter.com/peryline">
                  <i className="fa fa-3x fa-twitter text-white mr-3"></i>
                </a>

                <a href="https://www.instagram.com/evebabe2006/?hl=en">
                  <i className="fa fa-3x fa-instagram text-white"></i>
                </a>
              </>
            )}
            <button
              onClick={(e) => toggleOpenButton1(true)}
              className="ml-3 staff_button bg-danger"
            >
              Connect...
            </button>
          </div>
        </Col>
      </Row>
      <Row className="staff_row">
        <Col xs={12} lg={6} className="text-dark " data-aos="zoom-in">
          <div className="staff_profile">
            <h4>
              {" "}
              <strong>Name:</strong> Ngwa McDonald
            </h4>
            <p>
              <strong>Title:</strong> Team Manager
            </p>
            <p>
              <strong>profile:</strong> Ngwa Mc Donald is an accountant with
              highly exceptional organisational skills. Due to his past record
              of running ASCAMINU(Association of Cameroonians in Umeå), the klub
              entrusted the management of the team in his hands
            </p>
            <blockquote className="text-danger font-weight-bolder">
              "The only impossible thing is the one which doesn't exist"
            </blockquote>

            {openButton2 && (
              <>
                <a href="https://www.facebook.com/ngwa.macdonald.3">
                  <i className="fa fa-3x fa-facebook text-white mr-3"></i>
                </a>
                <a href="https://twitter.com/peryline">
                  <i className="fa fa-3x fa-twitter text-white mr-3"></i>
                </a>

                <a href="https://www.instagram.com/evebabe2006/?hl=en">
                  <i className="fa fa-3x fa-instagram text-white"></i>
                </a>
              </>
            )}
            <button
              onClick={(e) => toggleOpenButton2(true)}
              className="ml-3 staff_button bg-danger"
            >
              Connect...
            </button>
          </div>
        </Col>
        <Col xs={12} lg={4} className="mb-3">
          <div classname="card" id="staff_2">
            <img
              src={mgr}
              alt="team manager"
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
      <Row className="mb-3  text-white staff_row">
        <Col lg={4}>
          <div classname="card" id="staff_3">
            <img src={coach} alt="coach" className="img-fluid" />
          </div>
        </Col>
        <Col lg={6} className="text-dark " data-aos="zoom-in">
          <div className="staff_profile">
            <h4>
              {" "}
              <strong>Name:</strong>Ojong Roland.O
            </h4>
            <p>
              <strong>Title:</strong> Head Coach
            </p>
            <p>
              <strong>Profile:</strong> Ojong Roland has a great football
              career. He played in the national team of Cameroon and some other
              teams in Chin, South Africa, Iran and Cyprus. He is known as the
              unbeatable.He also has trained experience as a coach. His
              outstanding tactics has helped the team welcome new members
            </p>
            <blockquote className="text-danger font-weight-bolder">
              "Giving up is not an option.I am commited in taking WSK to the
              championship"
            </blockquote>
            {openButton3 && (
              <>
                <a href="https://www.facebook.com/ojong.roland">
                  <i className="fa fa-3x fa-facebook text-white mr-3"></i>
                </a>
                <a href="https://twitter.com/peryline">
                  <i className="fa fa-3x fa-twitter text-white mr-3"></i>
                </a>

                <a href="https://www.instagram.com/evebabe2006/?hl=en">
                  <i className="fa fa-3x fa-instagram text-white"></i>
                </a>
              </>
            )}
            <button
              onClick={(e) => toggleOpenButton3(true)}
              className="ml-3 staff_button bg-danger"
            >
              Connect...
            </button>
          </div>
        </Col>
      </Row>
      <Row className="staff_row pb-3">
        <Col lg={6} className="text-dark " data-aos="zoom-in">
          <div className="staff_profile">
            <h4>
              {" "}
              <strong>Name:</strong> Sidibe Michael
            </h4>
            <p>
              <strong>Title:</strong> Assistant Coach
            </p>
            <p>
              <strong>profile:</strong> Sidibe Michael is a very passionate and
              talented player. He playe in the Ivorian national team and in
              countries like France and Spain. He has all the expertise required
              to nurture young players
            </p>
            <blockquote className="text-danger font-weight-bolder">
              "If I don't score, I stop playing football"
            </blockquote>
            {openButton && (
              <>
                <a href="https://www.facebook.com/michael.sidibe.94">
                  <i className="fa fa-3x fa-facebook text-white mr-3"></i>
                </a>
                <a href="https://twitter.com/peryline">
                  <i className="fa fa-3x fa-twitter text-white mr-3"></i>
                </a>

                <a href="https://www.instagram.com/evebabe2006/?hl=en">
                  <i className="fa fa-3x fa-instagram text-white"></i>
                </a>
              </>
            )}
            <button
              onClick={(e) => toggleOpenButton(true)}
              className=" staff_button bg-danger"
            >
              Connect...
            </button>
          </div>
        </Col>
        <Col lg={4}>
          <div classname="card " id="staff_4">
            <img src={mike} alt="assistant coach" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Staff;
