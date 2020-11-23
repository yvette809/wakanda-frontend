import React, { useState, useEffect } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import Loader from "../components/Loader";
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
import {
  createEventReview,
  listEventDetails,
  deleteEvent,
} from "../actions/eventReviews";
import { connect, useDispatch } from "react-redux";
import { EVENTS_CREATE_REVIEW_RESET } from "../actions/types";
import Rating from "../components/Rating";

const EventDetails = ({
  setAlert,
  deleteEvent,
  createEventReview,
  listEventDetails,
  eventReviewCreate,
  eventDetails,
  eventDelete,
  auth,
  history,
}) => {
  const dispatch = useDispatch();

  const { isAuthenticated, user } = auth;
  const { loading, error, event } = eventDetails;
  console.log("EVENT", event && event);
  const { reviews } = event;

  const {
    success: successEventReview,
    error: errorEventReview,
  } = eventReviewCreate;

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
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
    console.log("USER", user);
    createEventReview(_id, {
      user: {
        name: user.name,
        _id: user._id,
      },
      rating,
      comment,
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
        creator: newEvent.creator,
        date: newEvent.date,
      });
      // setLoading(false);
    } else {
      setAlert("something went wrong", "warning");
    }
  };

  useEffect(() => {
    editEvent();
  }, []);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this Event?")) {
      deleteEvent(id);
      setAlert("Event Deleted", "success");
      history.push("/");
    }
  };

  if (loading) {
    return <Loader />;
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
                {event.user && event.user._id === user._id && (
                  <button
                    className="py-0 event_button "
                    onClick={() => deleteHandler(event._id)}
                  >
                    x
                  </button>
                )}
              </Col>
              <Col md={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Rating
                      value={event.rating}
                      text={`${event.numReviews} reviews`}
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Title: </strong>
                    {event.title}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Location</strong>: {event.location}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <strong>Date</strong>:{event.date}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Time</strong>:{event.time}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Description</strong>:{event.description}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    created By:<strong>{event.user && event.user.name}</strong>
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
            <h2 className="text-center font-weight-bolder">Reviews</h2>
            {reviews && reviews.length === 0 && <setAlert>No Reviews</setAlert>}
            <ListGroup variant="flush">
              {reviews &&
                reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <p>{review.comment}</p>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                  </ListGroup.Item>
                ))}
              <ListGroup.Item>
                <h5 className="text-muted my-2">
                  Let Us Know What You Think About The Event
                </h5>
                {errorEventReview && (
                  <setAlert variant="danger">{errorEventReview}</setAlert>
                )}
                {isAuthenticated ? (
                  <Form onSubmit={submitHandler}>
                    <Form.Group controlId="rating">
                      <Form.Label className="font-weight-bold">
                        Rating
                      </Form.Label>
                      <Form.Control
                        as="select"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="comment">
                      <Form.Label className="font-weight-bold">
                        Comment
                      </Form.Label>
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
                  <h4 className="text-muted">
                    Please <Link to="/login">sign in</Link> to write a review{" "}
                  </h4>
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
  eventDelete: state.eventDelete,
});

export default connect(mapStateToProps, {
  setAlert,
  deleteEvent,
  createEventReview,
  listEventDetails,
})(EventDetails);
