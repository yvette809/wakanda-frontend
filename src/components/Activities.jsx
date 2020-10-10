import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import activity from "../images/activity.jpg";
import kids from "../images/kids.jpg";

const Activities = () => {
  return (
    <>
      <div className="text-center mb-4">
        {/* <ioMdFootball /> */}
        <i
          className=" fa fa-baseball-ball mb-2 mt-5 bg-danger fa_about"
          style={{ fontSize: "6rem", padding: "15px", borderRadius: "50%" }}
        ></i>
        <h1 className= "activities_intro">Our Activities</h1>
      </div>
      <Container id="activities_section py-5">
        <Row className="text-dark my-5">
          <Col className="" xs={12} lg={6}>
            <div className="kids_profile" data-aos="fade-in">
              <img src={kids} alt="kidsimage" />
            </div>
          </Col>
          <Col className="mb-3 kids_div" xs={12} lg={6}>
            <div data-aos="zoom-in">
              <h1 className="text-danger activities_heading">Kids Corner</h1>
              <p style={{ fontSize: "1.3rem" }} className="activities_corner">
                At WSK, we specialise in the well-being of kids.We have trained
                coaches that take kids from all ages.We train them to become
                professionals.All kids are welcome it desn't matter on the
                skill-level.
              </p>
              <Link to="/kids">
                <button className="read_more bg-danger">Read More</button>
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="mb-4 text-dark my-5 py-5 ">
          <Col xs={12} lg={6} className="football_div">
            <div>
              <h1 className="text-danger activities_heading">Football</h1>
              <p style={{ fontSize: "1.3rem" }} className="activities_corner">
                Football is our passion. We train twice every week to keep the
                spirit alive. At WSK, we believe in equality and mutual respect
              </p>
              <Link to="/football">
                <button className="read_more bg-danger">Read More</button>
              </Link>
            </div>
          </Col>
          <Col xs={12} lg={6} data-aos="fade-in">
            <div className="foot_img">
              <img src={activity} alt="footimage" />
            </div>
          </Col>
        </Row>
        <Row className="text-dark">
          <Col className="mb-5 xs={12}">
            <div className="basket_img">
              <img
                src="https://s.abcnews.com/images/Sports/kobe-bryant-lakers-mo_hpEmbed_20200126-233715_4x3_992.jpg"
                alt="basketballimage"
              />
            </div>
          </Col>
          <Col xs={12} lg={6} data-aos="zoom-in">
            <div>
              <h1 className="text-danger activities_heading">Basketball</h1>
              <p style={{ fontSize: "1.3rem" }} className="activities_corner">
                We recently diversified in to the field of Basketball. During
                our basketball trainings, we have the opportunity to train a
                team of 15 to 20 persons.
              </p>
              <Link to="/basketball">
                <button className="read_more last_button bg-danger">Read More</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Activities;
