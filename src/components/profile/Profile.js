import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import { getProfileById } from "../../actions/profile";

const Profile = ({ getProfileById, profile: { profile }, auth, match }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <div className="container">
      {profile === null ? (
        <Spinner animation="border" />
      ) : (
        <>
          <Link to="/profiles" className="btn btn-light">
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false && auth.user&&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}
            
          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary">Experience</h2>
              {profile.experience.length > 0 ? (
                <>
                  {profile.experience.map((experience) => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </>
              ) : (
                <h4>No experience credentials</h4>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default withRouter(
  connect(mapStateToProps, { getProfileById })(Profile)
);
