import axios from "axios";
import { setAlert } from "./alert";

import { GET_PROFILE, PROFILE_ERROR } from "./types";

// GET curent user's profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:4000/profile/me");
    console.log("profile response", res);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};

// export const getProfiles = () => async (dispatch) => {

//   dispatch({type: CLEAR_PROFILE});
//   try {
//     const res = await axios.get("/api/profile");
//     dispatch({
//       type: GET_PROFILES,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: PROFILE_ERROR,
//       // payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// //get profile by id
// export const getProfileById = (userId) => async (dispatch) => {

//   try {
//     const res = await axios.get(`/api/profile/user/${userId}`);
//     dispatch({
//       type: GET_PROFILE,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: PROFILE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// create or update profile

export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:4000/profile",
      formData,
      config
    );
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert(edit ? "profile updated" : "profile created"));
    if (!edit) {
      history.push("/dashboard");
    }
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
