import React from "react";
import Event from "./Event";
import Moment from "react-moment";
import {
  Container,
  Row,
  Carousel,
  Col,
  Spinner,
  Card,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const EventList = ({ events, loading, deleteEvent }) => {
  if (events.length < 0 && loading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="danger" role="status">
          <span className="sr-only ">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Container fluid className="mb-2">
      <Carousel pause="hover" expand={"lg"}>
        {events &&
          events.map((evt) => (
            // <Event key={evt.id} event={evt} />

            <Carousel.Item>
              <div className="img_div active ">
                <Link to={`/eventdetails/${evt._id}`}>
                  <img
                    className="d-block w-100 abtimg img-fluid"
                    src={evt.image}
                    alt="events"
                  />
                </Link>
              </div>

              <Carousel.Caption className= "carousel-caption">
                <div className="d-flex-inline">
                     <p className="event_title">{evt.title}</p>
                 
                  {/* <small className="text-left event_date">
                    {" "}
                    Date posted:{" "}
                    <Moment format="YYYY/MM/DD">{evt.createdAt}</Moment>
                  </small> */}
                  <Link to={`/eventdetails/${evt._id}`}><button className= "read_more details">View Details</button></Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </Container>
  );
  // return (
  //   <div className="event_div">
  //     <h1
  //       style={{
  //         fontSize: "1.3rem",
  //         textTransform: "uppercase",
  //         color: "white",
  //       }}
  //       className="text-center mb-4"
  //     >
  //       Upcoming Events
  //     </h1>
  //     <hr />
  //     {!events && !loading ? (
  //       <h1>Events not found</h1>
  //     ) : (

  //       events.map((event) => (
  //         <>
  //           <button
  //             className="py-0 event_button "
  //             onClick={() => deleteEvent(event._id)}
  //             style= {{display: "none"}}
  //           >
  //             x
  //           </button>
  //           <Event key={event.id} event={event} />
  //         </>
  //       ))

  //     )}

  //   </div>
  // );
};
export default EventList;
