import React, { useState } from "react";
import coach from "../images/coach.jpg";
import mike from "../images/mike.jpg";
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
      <div style={{ borderRadius: "20px" }}>
        <Row className=" text-white mt-3 staff_row">
          <Col xs={12} lg={4} className="mb-3">
            <div classname="card " id="staff_1">
              <img
                src="https://scontent.fume1-1.fna.fbcdn.net/v/t31.0-8/904757_10152024235558996_327888442_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=DIByOw8FMxcAX9Kftul&_nc_ht=scontent.fume1-1.fna&oh=80a1a34a08ca50878a0078a771f2341d&oe=5F8935C2"
                alt="chairman"
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
                experience.As a former referee in Sweden, he thinks the best
                place to serve is at WSK.
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
                    <i class="fa fa-3x fa-instagram text-white"></i>
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
                of running ASCAMINU(Association of Cameroonians in Umeå), the
                klub entrusted the management of the team in his hands
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
                    <i class="fa fa-3x fa-instagram text-white"></i>
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
                src="https://scontent.fume1-1.fna.fbcdn.net/v/t31.0-8/920723_286412858160540_1399172526_o.jpg?_nc_cat=103&_nc_sid=174925&_nc_ohc=wnM_n-uve8MAX8AqN4x&_nc_oc=AQm_1KnSD4g8NyvM15Dm2inIimSCqtmXXYZyaxRh0-qgPE0R7un7JiljsOCVte9Klr4&_nc_ht=scontent.fume1-1.fna&oh=e696a9606927dee5aa300831671db0e4&oe=5F8B233A"
                alt="team manager"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3  text-white staff_row">
          <Col xs={12} lg={4}>
            <div classname="card" id="staff_3">
              <img src={coach} alt="coach" />
            </div>
          </Col>
          <Col xs={12} lg={6} className="text-dark " data-aos="zoom-in">
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
                career. He played in the national team of Cameroon and some
                other teams in Chin, South Africa, Iran and Cyprus. He is known
                as the unbeatable.He also has trained experience as a coach. His
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
                    <i class="fa fa-3x fa-instagram text-white"></i>
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
          <Col xs={12} lg={6} className="text-dark " data-aos="zoom-in">
            <div className="staff_profile">
              <h4>
                {" "}
                <strong>Name:</strong> Sidibe Michael
              </h4>
              <p>
                <strong>Title:</strong> Assistant Coach
              </p>
              <p>
                <strong>profile:</strong> Sidibe Michael is a very passionate
                and talented player. He playe in the Ivorian national team and
                in countries like France and Spain. He has all the expertise
                required to nurture young players
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
                    <i class="fa fa-3x fa-instagram text-white"></i>
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
          <Col xs={12} lg={4}>
            <div classname="card " id="staff_4">
              <img src={mike} alt="assistant coach" />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Staff