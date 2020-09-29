import React, { useEffect } from "react";
import { connect } from "react-redux";
import {Spinner} from "react-bootstrap"
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profile";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <>
      {loading ? (
    <Spinner animation="border"/>
      ) : (
        <>
          <h1 className="large text-primary">Players</h1>
          <p className="lead">
            <i className="fa fa-connectdevelop" /> Browse and connect with our
            team members
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
