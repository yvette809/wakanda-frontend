import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "../Loader";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profile";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  console.log("The profiles are", profiles);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className=" container d-flex-inline text-center mb-4" style={{marginTop:"100px"}}>
            <h1 className=" text-primary">Players</h1>
            <p className="lead">
              <i className="fa fa-connectdevelop " /> Browse and connect with
              our Team Members
            </p>
          </div>
          <div className="container">
            <div className=" row profiles">
              {profiles.length > 0 ? (
                profiles.map((profile) => profile.user && (
                  <>
                    <div className="col col-sm-2 col-md-6 col-lg-4">
                      <ProfileItem key={profile._id} profile={profile} />
                    </div>
                  </>
                ))
              ) : (
                <h4>No player found...</h4>
              )}
            </div>
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
