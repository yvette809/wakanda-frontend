import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Spinner, Container } from "react-bootstrap";
import {
  getCurrentProfile,
  createProfile,
  deleteAccount,
} from "../../actions/profile";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user, isAuthenticated },
  profile: { profile, loading },
}) => {
  console.log("the auth is", user);

  useEffect(() => {
    getCurrentProfile();
  }, []);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Container>
      <div className="large text-primary">
        <h1>Welcome {user && user.name} !! You are now an official WSK Member </h1>
      </div>
{/* 
      <p className="lead">
        <i className="fa fa-user mr-2"></i>Welcome {user && user.name}
      </p> */}
      {profile !== null ? (
        <>
          <DashboardActions />
          <Experience experience={profile.experience} />

          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fa fa-user-minus"></i>Delete My Account
            </button>
          </div>
        </>
      ) : (
        <>
          <p>You have not yet setup a profile. Please add some info to enjoy the full-benefits of WSK membership</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create profile
          </Link>
        </>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  createProfile,
  getCurrentProfile,
  deleteAccount,
})(Dashboard);
