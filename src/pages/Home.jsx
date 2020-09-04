import React, { useState, useEffect } from "react";
import axios from 'axios'
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
  
       })
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
    <Container fluid>
      <Row className="">
        <Col lg={10}>
          <Jumbotron className="jumbo">
            <h1 className="text-white text-center">
              Welcome to Wakanda Sports Klub (WSK)
            </h1>
            <p className="text-white font-weight-bolder text-center">
              A Home of Champions
            </p>
            <p>
              <Link to="/mission">
                <Button variant="primary" className="first_button">
                  Descover more
                </Button>
              </Link>
            </p>
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
      <Container className="values">
        <Row className="text-center my-4">
          <Col className="col col-lg-2">
            <Card
              className="mb-5 first_card"
              style={{ backgroundColor: "#008bcc" }}
            >
              <Card.Body>
                <Card.Title>OUR VALUES</Card.Title>
                <hr style={{ border: "1px solid red" }} />
                <Card.Text>
                  <p>RESPECT</p>
                  <p>PASSION</p>
                  <p>COMMITMENT</p>
                  <p>TEAMWORK</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col col-lg-2">
            <Card className="first_card" style={{ backgroundColor: "#00a13a" }}>
              <Card.Body>
                <Card.Title>WHERE WE OPERATE</Card.Title>
                <hr style={{ border: "1px solid red" }} />
                <Card.Text>
                  <p>
                    We use sports in changing Lives of immigrants all over Umeå
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col col-lg-2">
            <Card className="first_card" style={{ backgroundColor: "#d40075" }}>
              <Card.Body>
                <Card.Title>JOIN US</Card.Title>
                <hr style={{ border: "1px solid red" }} />
                <Card.Text>
                  <p>Come and Experience the magic of WSK aka Wakanda</p>
                  <Link to="/register">
                    <button className="register">Register</button>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col col-lg-2">
            <Card className="first_card" style={{ backgroundColor: "#fbba00" }}>
              <Card.Body>
                <Card.Title>SUPPORT US</Card.Title>
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
    </Container>
  );
  }

export default Home;
