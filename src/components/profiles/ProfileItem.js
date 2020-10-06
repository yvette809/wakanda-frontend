import React from "react";
import { Link } from "react-router-dom";

const ProfileItem = ({ profile: { user, location, skills } }) => {
  const { _id, name, avatar } = user;
  console.log("the profile userinfo is", _id, name, avatar);
 

  return (
    <div className="profile bg-light">
      <img
        src={avatar}
        alt=""
        className="round-img"
        style={{ borderRadius: "50%" }}
      />
      <div>
        <h2>{name}</h2>

        <p className="my-1">{location && <span>{location}</span>}</p>

        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fa fa-check" /> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileItem;
