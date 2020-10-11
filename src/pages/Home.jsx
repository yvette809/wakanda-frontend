import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { setAlert } from "../actions/alert";
import { connect } from "react-redux";
import Staff from "../components/Staff";
// import Staff2 from "../components/Staff2";
import Activities from "../components/Activities";
import Sponsors from "../components/Sponsors";
import { FaAd, FaBiking, FaEdge, FaMedal ,FaDribbble} from "react-icons/fa";

import {
  Jumbotron,
  Container,
  Button,
  Row,
  Col,
  Card,
  Modal,
  Form,
  FormControl,
} from "react-bootstrap";
import EventList from "../components/EventList";
import SearchForm from "../components/SearchForn";
import { Link, useParams } from "react-router-dom";

const Home = ({ setAlert }) => {
  // scroll animations
  useEffect(() => {
    AOS.init();
  });
  const [events, setEvents] = useState([]);
  const evenp = {
    title: "",
    description: "",
    image: "",
    time: "",
    location: "",
    date: "",
  };

  const [newEvent, setnewEvent] = useState(evenp);

  const { title, description, image, time, location, date } = newEvent;
  const [loading, setLoading] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [search, setSearch] = useState("text");

  // get Events

  useEffect(() => {
    const getEvents = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://vast-bayou-47622.herokuapp.com/events"
        );
        if (response.ok) {
          const events = await response.json();
          console.log("events are", events);
          setEvents(events.data);
        } else {
          setAlert("something went wrong", "danger");
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getEvents();
  }, []);

  //Add Events
  const addEvent = async (e) => {
    // e.preventDefault();

    setLoading(true);

    const response = await fetch("http://localhost:4000/events", {
      method: "POST",
      body: JSON.stringify(evenp),
      "Content-Type": "application/json",
    });

    if (response.ok) {
      const responseEvent = await response.json();
      console.log(responseEvent);
      setnewEvent(responseEvent.data);

      alert("event added");

      setLoading(false);
    } else {
      alert("something went wrong");
    }
    setnewEvent({
      title: "",
      description: "",
      image: "",
      time: "",
      location: "",
      date: "",
    });
  };

  // delete Event

  const deleteEvent = async (_id) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:4000/events/${_id}`, {
        method: "delete",
      });
      if (response.ok) {
        const events = await response.json();
        const targetedE = events.filter((event) => event._id !== _id);
        setEvents(targetedE);
      } else {
        console.log("something went wrong");
      }

      //   this.setState({
      //  students:this.state.students.filter(x =>x._id !== _id)

      // })
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  // useEffect(() => {
  //   deleteEvent();
  // }, []);

  // search Event
  useEffect(() => {
    const searchEvents = async (search) => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:4000/events?s=${search}`
        );
        if (response.ok) {
          const searchEvents = await response.json();
          setSearch(searchEvents);
        } else {
          console.log("something went wrong");
        }
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    searchEvents();
  }, [search]);

  return (
    <>
      <div id="home_sessions" className="mb-5">
        <div className="home_overlay">
          <Container className="mb-5 text-center">
            <Row>
              <Col>
                <h1 className="text-white text_info">
                  Welcome to Wakanda Sports Klub (WSK)
                </h1>
                <Button
                  className="text-white intro_button"
                  variant="danger"
                  style={{ fontSize: "1.6rem" }}
                >
                  A Home of Champions
                </Button>
                <Link to="/mission">
                  <Button className="first_button ">About Us</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Container className="justify-content-sm-center text-sm-center ">
        <div className="text-center">
          <FaAd
            className="fa_about  mt-4"
            style={{
              fontSize: "5rem",
              padding: "15px",
              color: "red",
              borderRadius: "50%",
            }}
          />
        </div>
        <div>
          <h1 className="text-center  ">About WSK</h1>
        </div>

        <Row className="text-center my-5">
          <Col lg={3}>
            <FaBiking
              className="fa_about bg-danger mb-4"
              style={{ fontSize: "5rem", padding: "15px", borderRadius: "50%" }}
            />
            <div className="about_wak">
              <h4>AMAZING EXPERIENCE</h4>
              <p>We lay emphasis on members-satisfaction and well-being</p>
            </div>
          </Col>

          <Col lg={3}>
            <FaDribbble
              className="fa_about bg-danger mb-4"
              style={{ fontSize: "5rem", padding: "15px", borderRadius: "50%" }}
            />
            <div className="about_wak">
              <h4>SKILLED LEADERSHIP</h4>
              <p>
                We have two of the finest sports coaches <br />
                in Umeå.
              </p>
            </div>
          </Col>

          <Col lg={3}>
            <FaMedal
              className="fa_about bg-danger mb-4"
              style={{ fontSize: "5rem", padding: "15px", borderRadius: "50%" }}
            />
            <div className="about_wak">
              <h4>MEDALS WON</h4>
              <p>
                Present Gold Medalists at the
                <br /> last Umeå Kommun competition @2019
              </p>
            </div>
          </Col>

          <Col lg={3}>
            <FaEdge
              className="fa_about bg-danger mb-4"
              style={{ fontSize: "5rem", padding: "15px", borderRadius: "50%" }}
            />
            <Link to="/register"></Link>
            <div className="about_wak">
              <h4>COMMITMENT</h4>
              <p>
                We are commited to make you smile even in the darkest winter
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <h1 className="text-center">Upcoming Events</h1>
        <EventList
          events={events}
          loading={loading}
          deleteEvent={deleteEvent}
        />
        <Modal show={showModal}>
          <Modal.Header closeButton onClick={() => setshowModal(false)}>
            <Modal.Title>Add Event</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={addEvent}>
              <FormControl
                type="text"
                value={title}
                name="title"
                placeholder="Add Title"
                onChange={(e) => setnewEvent(e.currentTarget.value)}
              />
              <FormControl
                type="text"
                value={description}
                name="description"
                placeholder="Add description"
                onChange={(e) => setnewEvent(e.currentTarget.value)}
              />
              <FormControl
                type="text"
                value={image}
                name="image"
                placeholder="Add Image"
                onChange={(e) => setnewEvent(e.currentTarget.value)}
                required
              />
              <FormControl
                type="text"
                value={time}
                name="time"
                placeholder="Add Time"
                onChange={(e) => setnewEvent(e.currentTarget.value)}
              />
              <FormControl
                type="text"
                value={location}
                name="location"
                placeholder="Add Location"
                onChange={(e) => setnewEvent(e.currentTarget.value)}
              />
              <FormControl
                type="date"
                value={date}
                name="date"
                placeholder="Add Date"
                onChange={(e) => setnewEvent(e.currentTarget.value)}
              />

              <FormControl
                type="file"
                value={image}
                name="file"
                placeholder="Add file"
                onChange={(e) => setnewEvent(e.currentTarget.value)}
              />
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setshowModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={addEvent}>
              Add Event
            </Button>
          </Modal.Footer>
        </Modal>
        <button
          className="btn-primary"
          onClick={() => setshowModal(true)}
          style={{ visibility: "hidden" }}
        >
          Open Modal
        </button>
      </Container>
      <Activities />
      <div id="values_section" className="">
        <div className="dark_overlay">
          <Container className="values" id="wak_values">
            <Row className="text-center my-4 ">
              <Col className="col col-lg-2 col-xs-3 ">
                <Card
                  className="mb-5 first_card bg-outline passion"
                  style={{
                    backgroundColor: "transparent",
                    outlineColor: "white",
                    outlineStyle: "solid",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <i className="fa fa-heart mr-2 text-danger"></i>OUR VALUES
                    </Card.Title>
                    <hr style={{ border: "1px solid white" }} />
                    <Card.Text className="text-danger">
                      <div className="passion_wak">
                        <p>RESPECT</p>
                        <p>PASSION</p>
                        <p>COMMITMENT</p>
                        <p>TEAMWORK</p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col col-lg-2 col-xs-3 ">
                <Card
                  className="second_card passion"
                  style={{
                    backgroundColor: "transparent",
                    outlineColor: "white",
                    outlineStyle: "solid",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <i className="fa fa-map mr-2"></i>
                      <span>ACHIEVEMENTS</span>
                    </Card.Title>
                    <hr style={{ border: "1px solid red" }} />
                    <Card.Text>
                      <div className="passion_wak">
                        <p>
                          We use sports in changing Lives of immigrants all over
                          Umeå
                        </p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col col-lg-2 col-xs-3">
                <Card
                  className="third_card passion"
                  style={{
                    backgroundColor: "transparent",
                    outlineColor: "white",
                    outlineStyle: "solid",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <i className="fa fa-user mr-2 text-primary" />
                      JOIN US
                    </Card.Title>
                    <hr style={{ border: "1px solid white" }} />
                    <Card.Text className="text-danger">
                      <div className="passion_wak">
                        <p>Come and Experience the magic of WSK aka Wakanda</p>
                      </div>

                      <Link to="/register">
                        <button className="register" id= "register_button">Register</button>
                      </Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col col-lg-2 col-xs-3">
                <Card
                  className="fourth_card bg-midnight passion"
                  style={{
                    backgroundColor: "transparent",
                    outlineColor: "white",
                    outlineStyle: "solid",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <i className="fa fa-support mr-2 text-danger"></i>SUPPORT
                      US
                    </Card.Title>
                    <hr style={{ border: "1px solid red" }} />
                    <Card.Text>
                      <div className="passion_wak">
                        <p>If you like what we do, please support us</p>
                      </div>

                      <Link to="/donate">
                        <button className="donate">DONATE</button>
                      </Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Staff />
      <Sponsors />
      {/* <Staff2/> */}
      {/* <div className=" container-fluid bg-danger pics_container">
        <div id="contact_img_section" style={{ padding: "150px" }}>
          <div className="img_overlay "></div>
        </div>
      </div> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { setAlert })(Home);
