import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { loadUser } from "../../actions/auth";
import { Card, Button, Image } from "react-bootstrap";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    location,
    skills,
    image,
  },
}) => {
  return (
    <Card
      style={{ width: "18rem", height: "430px" }}
      className="my-3 bg-light "
    >
      {/* {image ? (
        <Image
          src={image}
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
          className="mb-2"
        />
      ) : (
        <Image
          src="https://cdn2.vectorstock.com/i/1000x1000/20/91/avatar-man-soccer-player-graphic-vector-9422091.jpg"
          alt="user picture"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
          className="mb-2"
        />
      )} */}
      <Card.Img
        variant="top"
        src={`https://vast-bayou-47622.herokuapp.com/profiles/${_id}.png`}
        onError={(e) =>
          (e.target.src =
            "https://cdn2.vectorstock.com/i/1000x1000/20/91/avatar-man-soccer-player-graphic-vector-9422091.jpg")
        }
        alt=""
        className="img-fluid"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
      <Card.Body>
        <Card.Title className="font-weight-bold">{name}</Card.Title>
        <Card.Text>
          <div>
            <p className="my-1">
              Location: {location && <span>{location}</span>}
            </p>
            <ul>
              {skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="text-primary">
                  <i className="fa fa-check" /> {skill}
                </li>
              ))}
            </ul>
          </div>
        </Card.Text>
        <Link to={`profile/${_id}`}>
          <Button variant="primary">View Profile</Button>
        </Link>
      </Card.Body>
    </Card>
    // <div className="profile bg-light">
    //   <img
    //     src={`http://localhost:4000/profiles/${_id}.png`}
    //     onError={(e) =>
    //       (e.target.src =
    //         "https://cdn2.vectorstock.com/i/1000x1000/20/91/avatar-man-soccer-player-graphic-vector-9422091.jpg")
    //     }
    //     alt=""
    //     className="img-fluid"
    //     style={{
    //       width: "200px",
    //       height: "200px",
    //       objectFit: "cover",
    //       borderRadius: "50%",
    //     }}
    //   />
    //   <div>
    //     <h2>{name}</h2>

    //     <p className="my-1">{location && <span>{location}</span>}</p>

    //     <Link to={`/profile/${_id}`} className="btn btn-primary ">
    //       View Profile
    //     </Link>
    //   </div>
    //   <ul>
    //     {skills.slice(0, 4).map((skill, index) => (
    //       <li key={index} className="text-primary">
    //         <i className="fa fa-check" /> {skill}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default ProfileItem;
