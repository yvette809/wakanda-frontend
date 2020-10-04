import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const Event = ({ key, event }) => {
  const { title, description, image, Date, Time, _id, createdAt } = event;

  return (
    <>
      <div    id="main_img" style={{ boxShadow: "5px 5px 5px 5px  grey" }}>
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
    </>
  );
};

export default Event;
