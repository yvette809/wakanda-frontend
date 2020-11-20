import React from "react";
import { connect } from "react-redux";

const Alert = ({ alerts }) => {
  console.log("in alert", alerts);
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div key={Alert.id} className={` alert alert-${alert.alertType}`} style= {{marginTop:"120px"}}>
        {alert.msg}
      </div>
    ))
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(Alert);
