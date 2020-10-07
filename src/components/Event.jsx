import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { Col, Carousel, CarouselItem } from "react-bootstrap";

const Event = ({ key, event }) => {
  const { title, image, _id, createdAt } = event;

  return (
    <>
      <Carousel.Item>
        <Link to={`/eventdetails/${_id}`}>
          <img className="d-block w-100 abtimg" src={image} alt="events" />
        </Link>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* <Col>
        <div>
          <Link to={`/eventdetails/${_id}`}>
            <p className="event_title">{title}</p>
          </Link>
          <small className="text-left event_date">
            {" "}
            Date posted: <Moment format="YYYY/MM/DD">{createdAt}</Moment>
          </small>
          <hr className="event_divider" />
        </div>
      </Col> */}
    </>
  );

  /* <Col lg={6}>
    <div    id="main_img" style={{ boxShadow: "1px 1px 1px 1px  grey" }}>
        <Link to={`/eventdetails/${_id}`}>
          <img
            src={image}
            alt="events"
            style={{ height: "80%", width: "100%", objectFit: "cover" }}
         
          />
        </Link>
        <div>
          <Link to={`/eventdetails/${_id}`}>
            <p className="event_title">{title}</p>
          </Link>
          <small className="text-left event_date">
            {" "}
            Date posted: <Moment format="YYYY/MM/DD">{createdAt}</Moment>
          </small>
          <hr className="event_divider" />
        </div>
      </div>
    </Col> */
};

export default Event;
