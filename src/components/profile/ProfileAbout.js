import React from "react";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => (
  <div className="profile-about  p-2">
    {bio && (
      <>
        <h3 className="text-primary ">{name.trim().split(" ")[0]}'s Bio</h3>
        <p style={{fontSize:"1.3rem"}}>{bio}</p>
        <div className="line" />
      </>
    )}
    <h3 className="text-primary">Skill Set</h3>
    <div className="skills" style={{fontSize:"1.3rem"}}>
      {skills.map((skill, index) => (
        <div key={index} className="p-1">
          <i className="fa fa-check" /> {skill}
        </div>
      ))}
    </div>
  </div>
);

export default ProfileAbout;
