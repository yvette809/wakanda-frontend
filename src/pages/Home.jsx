import React, { useState, useEffect } from "react";
import axios from "axios";
import { setAlert } from "../actions/alert";
import { connect } from "react-redux";
import {
  FaAd,
  FaBiking,
  FaEdge,
  FaMedal,
  FaResolving,
  ioMdFootball,
} from "react-icons/fa";
import ica from "../images/ica.png";
import kommun from "../images/kommun.png";
import peab from "../images/peab.jpg";
import bostaden from "../images/bostaden.jpg";
import UE from "../images/UE.png";
import coop from "../images/coop.png";
import activity from "../images/activity.jpg";
import kids from "../images/kids.jpg";

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

//import EventList from '../components/Event';

const Home = ({ setAlert }) => {
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

  const [message, setNewMessage] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
  });

  const { name, email, phone, text } = message;

  const { title, description, image, time, location, date } = newEvent;
  const [loading, setLoading] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [search, setSearch] = useState("text");

  // get Events

  useEffect(() => {
    const getEvents = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:4000/events");
        if (response.ok) {
          const events = await response.json();
          console.log("events are", events);
          setEvents(events.data);
        } else {
          setAlert("something went wrong", "danger");
        }
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
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

  // submit messase

  const submitMessage = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "" || text === "") {
      alert("fields cannot be empty");
    } else {
      const newMessage = {
        name,
        email,
        phone,
        text,
      };

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newMessage);
        const res = await axios.post(
          "http://localhost:4000/email",
          body,
          config
        );
        console.log(res.data);
        alert("message received");
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
    setNewMessage({
      name: "",
      email: "",
      phone: "",
      text: "",
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

  useEffect(() => {
    deleteEvent();
  }, []);

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
  }, []);

  return (
    <>
      <Container fluid>
        <Row className="">
          <Col lg={10} xs={12}  style={{ paddingLeft: "0" }}>
            <Jumbotron className="jumbo d-flex-inline text-center">
              <div className="wak_intro">
                <h1 className="text-dark text-center ">
                  Welcome to Wakanda Sports Klub (WSK)
                </h1>
                <p
                  className="text-dark font-weight-bolder text-center"
                  style={{ fontSize: "1.6rem" }}
                >
                  A Home of Champions
                </p>
                <p>
                  <Link to="/mission">
                    <Button
                      variant="primary"
                      className="first_button font-bold text-center"
                      style={{ fontSize: "1.2rem" }}
                    >
                      About Us
                    </Button>
                  </Link>
                </p>
              </div>
            </Jumbotron>
          </Col>
          <Col lg={2} >
            <div>
              <SearchForm searchValue={setSearch} />
              <div>
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
                    <Button
                      variant="secondary"
                      onClick={() => setshowModal(false)}
                    >
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
                >
                  Open Modal
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className= "justify-content-sm-center text-sm-center">
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
          <h1 className="text-center ">About WSK</h1>
        </div>

        <Row className="text-center my-5">
          <Col lg={3}>
            <FaBiking
              className="fa_about bg-danger mb-4"
              style={{ fontSize: "5rem", padding: "15px", borderRadius: "50%" }}
            />
            <h4>AMAZING EXPERIENCE</h4>
            <p>We lay emphasis on members-satisfaction and well-being</p>
          </Col>

          <Col lg={3}>
            <FaBiking
              className="fa_about bg-danger mb-4"
              style={{ fontSize: "5rem", padding: "15px", borderRadius: "50%" }}
            />
            <h4>SKILLED LEADERSHIP</h4>
            <p>
              We have two of the finest sports coaches <br />
              in Umeå.
            </p>
          </Col>

          <Col lg={3}>
            <FaMedal
              className="fa_about bg-danger mb-4"
              style={{ fontSize: "5rem", padding: "15px", borderRadius: "50%" }}
            />
            <h4>MEDALS WON</h4>
            <p>
              Present Gold Medalists at the
              <br /> last Umeå Kommun competition @2019
            </p>
          </Col>

          <Col lg={3}>
            <FaEdge
              className="fa_about bg-danger mb-4"
              style={{ fontSize: "5rem", padding: "15px", borderRadius: "50%" }}
            />
            <Link to="/register"></Link>
            <h4>COMMITMENT</h4>
            <p>We are commited to make you smile even in the darkest winter</p>
          </Col>
        </Row>
      </Container>
      <div id="values_section" className="">
        <div className="dark_overlay">
          <Container className="values" id="wak_values">
            <Row className="text-center my-4 ">
              <Col className="col col-lg-2 col-xs-3">
                <Card
                  className="mb-5 first_card bg-outline"
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
                      <p>RESPECT</p>
                      <p>PASSION</p>
                      <p>COMMITMENT</p>
                      <p>TEAMWORK</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col col-lg-2 col-xs-3">
                <Card
                  className="second_card"
                  style={{
                    backgroundColor: "transparent",
                    outlineColor: "white",
                    outlineStyle: "solid",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <i class="fa fa-map mr-2"></i>
                      <span>ACHIEVEMENTS</span>
                    </Card.Title>
                    <hr style={{ border: "1px solid red" }} />
                    <Card.Text>
                      <p>
                        We use sports in changing Lives of immigrants all over
                        Umeå
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col col-lg-2 col-xs-3">
                <Card
                  className="third_card"
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
                      <p>Come and Experience the magic of WSK aka Wakanda</p>
                      <Link to="/register">
                        <button className="register">Register</button>
                      </Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col col-lg-2 col-xs-3">
                <Card
                  className="fourth_card bg-midnight"
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
                      <p>If you like what we do, please support us</p>
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
      <div className="text-center mb-4">
        <ioMdFootball />
        <i
          className=" fa fa-baseball-ball mb-2 mt-4 bg-danger"
          style={{ fontSize: "6rem", padding: "15px", borderRadius: "50%" }}
        ></i>
        <h2>Our Activities</h2>
      </div>
      <Container id="activities_section">
        <Row className="text-white">
          <Col className="mb-3" lg={6} xs={12}>
            <div className="kids_profile">
              <img src={kids} alt="kidsimage" />
            </div>
          </Col>
          <Col className="mb-3" lg={6}>
            <div>
              <h1 className="text-danger activities_heading">Kids Corner</h1>
              <p style={{ fontSize: "1.3rem" }} className="activities_corner">
                At WSK, we specialise in the well-being of kids.We have trained
                coaches that take kids from all ages.We train them to become
                professionals.All kids are welcome it desn't matter on the
                skill-level.
              </p>
              <Link to="/kids">
                <button className="read_more">Read More</button>
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="mb-4 text-white">
          <Col>
            <div>
              <h1 className="text-danger activities_heading">Football</h1>
              <p style={{ fontSize: "1.3rem" }} className="activities_corner">
                Football is our passion. We train twice every week to keep the
                spirit alive. At WSK, we believe in equality and mutual respect
              </p>
              <Link to="/activies">
                <button className="read_more">Read More</button>
              </Link>
            </div>
          </Col>
          <Col xs={12}>
            <div className="foot_img">
              <img src={activity} alt="kidsimage" />
            </div>
          </Col>
        </Row>
        <Row className="text-white">
          <Col className="mb-5 xs={12}">
            <div className="basket_img">
              <img
                src="https://www.clickorlando.com/resizer/E3jnPkPmr7WH3l_jgOq0y-JdzY8=/1600x1066/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/QNBNH7TXVBFWPEH3SMMV7O25BU.jpg"
                alt="basketballimage"
              />
            </div>
          </Col>
          <Col xs={12}>
            <div>
              <h1 className="text-danger activities_heading">Basketball</h1>
              <p style={{ fontSize: "1.3rem" }} className="activities_corner">
                We recently diversified in to the field of Basketball. During
                our basketball trainings, we have the opportunity to train a
                team of 15 to 20 persons.
              </p>
              <Link to="/basketball">
                <button className="read_more">Read More</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mb-4">
        <div className="text-center my-4">
          <FaResolving
            className="fa_about bg-danger mb-4"
            style={{ fontSize: "5rem", padding: "15px", borderRadius: "50%" }}
          />
          <h1>The Driving Force</h1>
        </div>
        <div style={{ borderRadius: "20px" }}>
          <Row className=" text-white no-gutters ">
            <Col xs={12} lg={6}>
              <div
                classname="card "
                id="staff_1"
                style={{ minWidth: "30rem", lineHeight: "1rem" }}
              >
                <h5>Emmanuel Mukumu</h5>
                <p>Chairman WSK</p>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div
                classname="card  "
                id="staff_2"
                style={{ minWidth: "30rem", lineHeight: "1rem" }}
              >
                <h5>Ngwa McDonald</h5>
                <p>Team Manager</p>
              </div>
            </Col>
          </Row>
          <Row className="mb-3 no-gutters text-white">
            <Col xs={12} lg={6}>
              <div
                classname="card"
                id="staff_3"
                style={{ minWidth: "30rem", lineHeight: "1rem" }}
              >
                <h5>Ojong Roland</h5>
                <p>Head Coach</p>
              </div>
            </Col>
            <Col
              xs={12}
              lg={6}
              classname="card "
              id="staff_4"
              style={{ minWidth: "30rem", lineHeight: "1rem" }}
            >
              <div classname="align-content-end ">
                <h5>Sidibe Michael</h5>
                <p>Assistant Coach</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="text-center">
        <i
          className="fa fa-bullseye mb-2 mt-4 bg-danger"
          style={{ fontSize: "3rem", padding: "15px", borderRadius: "50%" }}
        ></i>
        <h2 className = "sponsors">Our Prospective Sponsors</h2>
      </div>
      <Container className="mb-3">
        <div className="sponsor d-flex justify-content-between align-content-lg-center mb-3">
          <img src={ica} alt="" className="sponsor_img" />
          <img src={kommun} alt="" className="sponsor_img" />
          <img src={peab} alt="" className="sponsor_img" />
          <img src={bostaden} alt="" className="sponsor_img" />
          <img src={UE} alt="" className="sponsor_img" />
          <img src={coop} alt="" className="sponsor_img" />
        </div>
      </Container>

      <div id="contact_img_section" style={{ padding: "150px" }}>
        <div class="img_overlay">
          <Container>
            <div>
              <i
                className="fa fa-3x fa-address-card text-center text-white d-block"
                style={{
                  padding: "15px",
                  borderRadius: "50%",
                  textAlign: "center",
                }}
              ></i>
            </div>
            <h1 className="text-center text-white">CONTACT US</h1>
            <div
              className="text-center text-white mb-2 enquiry"
              style={{ fontSize: "1.4rem" }}
            >
              For any type of enquiry, send us a message below. We usually
              respond within 24hours
            </div>
            <Row>
              <Col lg={3} xs={4}>
                <Form onSubmit={submitMessage}>
                  <Form.Control
                    type="text"
                    name="name"
                    id="name"
                    placeholder="YOUR NAME*"
                    value={name}
                    onChange={(e) => setNewMessage(e.currentTarget.value)}
                    className="mb-4"
                    style={{ padding: "20px" }}
                    required
                  />

                  <Form.Control
                    type="email"
                    id="email"
                    placeholder="YOUR EMAIL*"
                    value={email}
                    onChange={(e) => setNewMessage(e.currentTarget.value)}
                    className="mb-4"
                    style={{ padding: "20px" }}
                    required
                  />
                  <Form.Control
                    type="tel"
                    id="phone"
                    placeholder="YOUR PHONE*"
                    value={phone}
                    onChange={(e) => setNewMessage(e.currentTarget.value)}
                    className="mb-4"
                    style={{ padding: "20px" }}
                    required
                  />
                </Form>
              </Col>
              <Col lg={6} xs={4}>
                <Form.Group>
                  <Form.Control
                    name="textArea"
                    id="message"
                    placeholder="YOUR MESSAGE *"
                    value={text}
                    as="textarea"
                    Cols="30"
                    rows={3}
                    onChange={(e) => setNewMessage(e.currentTarget.value)}
                    className="mb-4 h-100"
                    style={{ padding: "20px" }}
                    required
                  />
                </Form.Group>
                <Button
                  variant="danger"
                  size="lg"
                  onClick={submitMessage}
                  style={{ width: "100%" }}
                >
                  {" "}
                  SEND MESSAGE
                </Button>
              </Col>
              <Col lg={3} xs={4}>
                <div className="mb-2">
                  <i className="fa fa-map-marker mr-2 fa_icon"></i>
                  <span className="text-white">
                    Språkgränd 29,90733 <br /> Umeå, Sweden
                  </span>
                </div>
                <div className="mb-2">
                  <i className="fa fa-2x fa-envelope-square mr-2 fa_icon"></i>
                  <span className="text-white">info@wsk@gmail.com</span>
                </div>
                <div className="mb-2  tel">
                  <i className="fa fa-2x fa-phone-square mr-2 fa_icon"></i>
                  <span className="text-white">0046760726885</span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default connect(null, { setAlert })(Home);
