import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaAd, FaBiking, FaEdge, FaMedal, FaResolving } from "react-icons/fa";

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

const Home = () => {
  const [events, setEvents] = useState([]);

  const [newEvent, setnewEvent] = useState({
    title: "",
    description: "",
    image: "",
    time: "",
    location: "",
    date: "",
  });

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
          console.log("something went wrong");
        }
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    getEvents();
  }, []);

  // Add Events
  const addEvent = async (e) => {
    // e.preventDefault();
    setLoading(true);

    const response = await fetch("http://localhost:4000/events", {
      method: "POST",
      body: JSON.stringify(newEvent),
      "Content-Type": "application/json",
    });

    if (response.ok) {
      setnewEvent({
        title: "",
        description: "",
        image: "",
        time: "",
        location: "",
        date: "",
      });
      alert("event added");

      setLoading(false);
    } else {
      alert("something went wrong");
    }
  };

  // const addEvent = async e => {
  //   //e.preventDefault();

  //     try{
  //       const config={
  //           headers:{
  //               'Content-Type':'application/json'
  //           }
  //       }

  //       const body = JSON.stringify(newEvent)
  //       const res = await axios.post('http://localhost:4000/events', body, config)
  //       console.log(res.data)
  //       setnewEvent(res.data)

  //   }catch(error){
  //       console.log(error)
  //   }
  //   }

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
    addEvent();
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
          <Col lg={10} style={{ paddingLeft: "0" }}>
            <Jumbotron className="jumbo d-flex-inline text-center">
              <div className="wak_intro">
                <h1 className="text-white text-center">
                  Welcome to Wakanda Sports Klub (WSK)
                </h1>
                <p className="text-white font-weight-bolder text-center">
                  A Home of Champions
                </p>
                <p>
                  <Link to="/mission">
                    <Button variant="primary" className="first_button">
                      About Us
                    </Button>
                  </Link>
                </p>
              </div>
            </Jumbotron>
          </Col>
          <Col lg={2}>
            <div>
              <p className="mb-4">Click below for details</p>
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
      <Container>
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
      <div id="values_section">
        <div className="dark_overlay">
          <Container className="values" id="wak_values">
            <Row className="text-center my-4 ">
              <Col className="col col-lg-2">
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
              <Col className="col col-lg-2">
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
              <Col className="col col-lg-2">
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
              <Col className="col col-lg-2">
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

      <Container>
        <div className="text-center my-4">
          <FaResolving
            className="fa_about bg-danger mb-4"
            style={{ fontSize: "5rem", padding: "15px", borderRadius: "50%" }}
          />
          <h1>The Driving Force</h1>
        </div>
        <Row className=" text-white no-gutters ">
          <Col lg={6}>
            <div
              classname="card "
              id="staff_1"
              style={{ minWidth: "30rem", lineHeight: "1rem" }}
            >
              <h5>Emmanuel Mukumu</h5>
              <p>Chairman WSK</p>
            </div>
          </Col>
          <Col lg={6}>
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
          <Col>
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
      </Container>
    </>
  );
};

export default Home;
