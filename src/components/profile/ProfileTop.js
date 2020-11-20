import React from "react";
import avat from "../../images/avatar1.png";

const ProfileTop = ({
  profile: {
    nationality,
    gender,
    location,
    dateOfBirth,
    social,
    user: { name, avatar, _id },
  },
}) => {
  return (
    <div className="profile-top p-2">
      <img
        src={`https://vast-bayou-47622.herokuapp.com/profiles/${_id}.png`}
        onError={(e) =>
          (e.target.src =
            "https://cdn2.vectorstock.com/i/1000x1000/20/91/avatar-man-soccer-player-graphic-vector-9422091.jpg")
        }
        alt="profile-pic"
        style={{ width: "15%",  borderRadius: "50%" }}
        className= "img-fluid"
      />

      <h1 className="text-white">{name}</h1>
      <div className="profile_fil text-white">
        <p>{nationality && <span>{nationality}</span>}</p>
        <p>{gender && <span> {gender}</span>}</p>
        <p>{dateOfBirth && <span> {dateOfBirth}</span>}</p>
        <p>{location && <span>{location}</span>}</p>
      </div>
      <div className="icons my-1 ">
        {social && social.twitter && (
          <a href={social.twitter} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter fa-2x text-white mr-2" />
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook fa-2x text-white mr-2" />
          </a>
        )}

        {social && social.youtube && (
          <a href={social.youtube} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-youtube fa-2x text-white mr-2" />
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram fa-2x text-white mr-2" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileTop;
