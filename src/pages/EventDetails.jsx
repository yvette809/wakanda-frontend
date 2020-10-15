import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Spinner,
  Modal,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Image,
  ListGroup,
} from "react-bootstrap";
import { setAlert } from "../actions/alert";
import { connect } from "react-redux";

const EventDetails = ({ setAlert }) => {
  const { _id } = useParams();
  const [event, setEvent] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const initialEvent = {
    title: "",
    description: "",
    image: "",
    time: "",
    location: "",
    date: "",
    id: "",
  };

  const [newEvent, setnewEvent] = useState(initialEvent);

  useEffect(() => {
    setLoading(true);

    const getSingleEvent = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://vast-bayou-47622.herokuapp.com/events/${_id}`
        );
        if (response.ok) {
          const event = await response.json();
          setEvent(event);
        } else {
          setAlert("no event found", "danger");
        }
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    getSingleEvent();
  }, [_id, setAlert]);

  // edit event
  const editEvent = async () => {
    setLoading(true);

    // const timeStamp = Date.now()
    const response = await fetch(
      "http://localhost:4000/events/" + newEvent.id,
      {
        method: "PUT",
        body: JSON.stringify(initialEvent),
        "Content-Type": "application/json",
      }
    );

    if (response.ok) {
      setAlert("event edited", "success");
      setnewEvent({
        title: newEvent.title,
        description: newEvent.description,
        image: newEvent.image,
        time: newEvent.time,
        location: newEvent.location,
        date: newEvent.date,
      });
      setLoading(false);
    } else {
      setAlert("something went wrong");
    }
  };

  useEffect(() => {
    editEvent();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="danger" role="status">
          <span className="sr-only ">Loading...</span>
        </Spinner>
      </div>
    );
  }
  return (
    <>
      {event && !loading ? (
        <>
          <div className="container mt-3 event_container">
            <Link to="/" className="btn btn-light my-3">
              Go Back
            </Link>
            <Row>
              <Col md={6}>
                <Image src={event.image} alt={event.name} fluid />
              </Col>
              <Col md={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h5>
                      <strong>{event.title}</strong>
                    </h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                  <h5>Location:{event.location}</h5>
                  </ListGroup.Item>

                  <ListGroup.Item>Date:{event.date}</ListGroup.Item>
                  <ListGroup.Item>Time:{event.time}</ListGroup.Item>
                  <ListGroup.Item>
                    Description:{event.description}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            {/* <div className="row align-content-center justify-content-center xs-mb-3">
              <div className="col col-lg-6 col-xs-12">
                <h2 className="evt_title font-weight-bolder">{event.title}</h2>
                <div className="event_img">
                  <img
                    src={event.image}
                    alt="single event"
                    className="img-fluid"
                  />
                </div>
                <br />
                <div className="evt_des">
                  <p>
                    Location: <strong>{event.location}</strong>
                  </p>
                  <p>
                    Date: <strong>{event.date}</strong>
                  </p>
                  <p>
                    Time: <strong>{event.time}</strong>
                  </p>
                </div>
              </div>
              <div className="col col-lg-6 col-xs-12">
                <p
                  className=" text-success font-weight-bolder event_description"
                  style={{ fontSize: "1.3rem" }}
                >
                  {event.description}
                </p>
              </div>
            </div> */}
          </div>
        </>
      ) : (
        <h2 className="text-center">No Event found</h2>
      )}

      <Modal show={showModal}>
        <Modal.Header closeButton onClick={() => setShowModal(false)}>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={editEvent}>
            <FormControl
              type="text"
              value={newEvent.title}
              name="title"
              placeholder="Add Title"
              onChange={(e) => setnewEvent(e.currentTarget.value)}
            />
            <FormControl
              type="text"
              value={newEvent.description}
              name="description"
              placeholder="Add description"
              onChange={(e) => setnewEvent(e.currentTarget.value)}
            />
            <FormControl
              type="text"
              value={newEvent.image}
              name="image"
              placeholder="Add Image"
              onChange={(e) => setnewEvent(e.currentTarget.value)}
              required
            />
            <FormControl
              type="text"
              value={newEvent.time}
              name="time"
              placeholder="Add Time"
              onChange={(e) => setnewEvent(e.currentTarget.value)}
            />
            <FormControl
              type="text"
              value={newEvent.location}
              name="location"
              placeholder="Add Location"
              onChange={(e) => setnewEvent(e.currentTarget.value)}
            />
            <FormControl
              type="date"
              value={newEvent.date}
              name="date"
              placeholder="Add Date"
              onChange={(e) => setnewEvent(e.currentTarget.value)}
            />

            <FormControl
              type="file"
              value={newEvent.image}
              name="file"
              placeholder="Add file"
              onChange={(e) => setnewEvent(e.currentTarget.value)}
            />
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={editEvent}>
            Edit Event
          </Button>
        </Modal.Footer>
      </Modal>
      <button className="btn-primary" onClick={() => setShowModal(true)}>
        Open Modal
      </button>
    </>
  );
};

export default connect(null, { setAlert })(EventDetails);
