import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { spinner } from "react-bootstrap";

const Dashboard = ({ auth: { user } }) => {
  return (
    <div>
      <i className="fa fa-user"></i>
       Welcome {user  && user.name}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
