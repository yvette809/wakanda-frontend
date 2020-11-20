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
    <div className="profile-top bg-info p-2">
      <img
        src={`https://vast-bayou-47622.herokuapp.com/profiles/${_id}.png`}
        onError={(e) =>
          (e.target.src =
            "https://cdn2.vectorstock.com/i/1000x1000/20/91/avatar-man-soccer-player-graphic-vector-9422091.jpg")
        }
        alt="profile-pic"
        style={{ width: "20%", height: "0%", borderRadius: "50%" }}
      />
      {/* <img className='round-img my-1 img-fluid' src={`http://localhost:4000/profiles/${_id}.png`} style={{width:"50%", height:"0%", borderRadius:"50%"}}alt='' /><hr/> */}
      <h1 className="">{name}</h1>
      <p className="lead">{nationality && <span>{nationality}</span>}</p>
      <p className="lead">{gender && <span> {gender}</span>}</p>
      <p className="lead">{dateOfBirth && <span> {dateOfBirth}</span>}</p>
      <p>{location && <span>{location}</span>}</p>
      <div className="icons my-1">
        {social && social.twitter && (
          <a href={social.twitter} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter fa-2x" />
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook fa-2x" />
          </a>
        )}

        {social && social.youtube && (
          <a href={social.youtube} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube fa-2x" />
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileTop;
