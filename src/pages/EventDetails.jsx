import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader"
import {
  Modal,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  Image,
  ListGroup,
} from "react-bootstrap";
import { setAlert } from "../actions/alert";
import { createEventReview, listEventDetails } from "../actions/eventReviews";
import { connect, useDispatch } from "react-redux";
import { EVENTS_CREATE_REVIEW_RESET } from "../actions/types";

const EventDetails = ({
  setAlert,
  createEventReview,
  listEventDetails,
  eventReviewCreate,
  eventDetails,
  auth,
}) => {
  const dispatch = useDispatch();

  const { isAuthenticated ,user} = auth;
  const { loading, error, event } = eventDetails;

  console.log("Event", event.user )
  const { reviews } = event;

  const {
    success: successEventReview,
    error: errorEventReview,
  } = eventReviewCreate;

  const [comment, setComment] = useState("");
  const { _id } = useParams();
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
    if (successEventReview) {
      setAlert("Review submitted");
      setComment("");
      dispatch({ type: EVENTS_CREATE_REVIEW_RESET });
    }
    listEventDetails(_id);
  }, [dispatch, setAlert, successEventReview, _id, listEventDetails]);

  //submit review
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('USER', user)
    createEventReview(_id, {
      user: {
        name: user.name,
        _id: user._id
      },
      comment
    });
  };

 
  // edit event
  const editEvent = async () => {
    // setLoading(true);

    // const timeStamp = Date.now()
    const response = await fetch(
      "http://localhost:4000/events/" + newEvent.id,
      {
        method: "PUT",
        body: JSON.stringify(newEvent),
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
      // setLoading(false);
    } else {
      setAlert("something went wrong");
    }
  };

  useEffect(() => {
    editEvent();
  }, []);

  if (loading) {
    return (
    <Loader/> 
    )
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
                  <ListGroup.Item>
                    created By:<strong>{user.name}</strong>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </div>
        </>
      ) : (
        <h2 className="text-center">No Event found</h2>
      )}
      <Container>
      <Row>
        <Col md={6}>
          <h2 className ="text-center font-weight-bolder">Reviews</h2>
          {reviews && reviews.length === 0 && <setAlert>No Reviews</setAlert>}
          <ListGroup variant="flush">
            {reviews &&
              reviews.map((review) => (
                <ListGroup.Item key={review._id}>
                  <strong>{ review.name}</strong>
                  <p>{review.comment}</p>
                  <p>{review.createdAt.substring(0, 10)}</p>
                 
                </ListGroup.Item>
              ))}
            <ListGroup.Item>
              <h3>What Do You Think?</h3>
              {errorEventReview && (
                <setAlert variant="danger">{errorEventReview}</setAlert>
              )}
              {isAuthenticated ? (
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                      as="textarea"
                      row="3"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </Form>
              ) : (
                <setAlert>
                  Please <Link to="/login">sign in</Link> to write a review{" "}
                </setAlert>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      </Container>

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
      {/* <button className="btn-primary" onClick={() => setShowModal(true)}>
        Open Modal
      </button> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  eventReviewCreate: state.eventReviewCreate,
  eventDetails: state.eventDetails,
});

export default connect(mapStateToProps, {
  setAlert,
  createEventReview,
  listEventDetails,
})(EventDetails);
