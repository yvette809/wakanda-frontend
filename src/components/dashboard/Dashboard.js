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
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  console.log("the auth is", isAuthenticated, profile);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Container className="dashboard_container">
      <div className="large text-primary">
        <Link to={`profile/${profile && profile._id}`}>
          <img
            src={` https://vast-bayou-47622.herokuapp.com/profiles/${
              profile && profile.user._id
            }.png`}
            onError={(e) =>
              (e.target.src =
                "https://cdn2.vectorstock.com/i/1000x1000/20/91/avatar-man-soccer-player-graphic-vector-9422091.jpg")
            }
            alt="user picture"
            style={{ width: "100px", height: "100px", borderRadius: "5px" }}
            className="mb-2"
          />
        </Link>

        {isAuthenticated && user.isAdmin ? (
          <h4 className="text-muted">
            I am <strong>{user.name}</strong>. I am the Admin, Treasurer and Web
            Master of WSK klub.Direct questions about the website's
            functionality to me
          </h4>
        ) : (
          <h1 className="dashboard text-muted ">
            Welcome <strong>{user && user.name}</strong> !! You are now an
            official WSK Member{" "}
          </h1>
        )}
      </div>

      {profile !== null ? (
        <>
          <DashboardActions />
          <Experience experience={profile.experience} />

          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fa fa-trash mr-2"></i>Delete My Account
            </button>
          </div>
        </>
      ) : (
        <>
          <p>
            You have not yet setup a profile. Please add some info to enjoy the
            full-benefits of WSK membership
          </p>
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
