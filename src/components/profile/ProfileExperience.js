import React from "react";
import Moment from "react-moment";
import moment from "moment";

const ProfileExperience = ({
  experience: { title, sportsClub, location, current, to, from, description },
}) => (
  <div className="bg-light p-3">
    <h3 className="text-dark">{sportsClub}</h3>
    <p>
      <Moment format="YYYY/MM/DD">{moment.utc(from)}</Moment> -{" "}
      {!to ? " Now" : <Moment format="YYYY/MM/DD">{moment.utc(to)}</Moment>}
    </p>
    <p style={{ fontSize: "1.3rem" }}>
      <strong>Position: </strong> {title}
    </p>
    <p>
      <strong>Location: </strong> {location}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

export default ProfileExperience;
