import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  DELETE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
} from "./types";

// GET curent user's profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://vast-bayou-47622.herokuapp.com/profiles/me"
    );
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

// Get all profiles
export const getProfiles = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get(
      "https://vast-bayou-47622.herokuapp.com/profiles"
    );
    
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      // payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//get profile by id
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://vast-bayou-47622.herokuapp.com/profiles/user/${userId}`
    );
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      // payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

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
      "https://vast-bayou-47622.herokuapp.com/profiles",
      formData,
      config
    );
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert(edit ? "profile updated" : "profile created", "success"));
    if (!edit) {
      history.push("/dashboard");
    }
  } catch (err) {
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }
    console.log(err)
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Experience

export const addExperience = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      "https://vast-bayou-47622.herokuapp.com/profiles/experience",
      formData,
      config
    );
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert(" Experience Added", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      // payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete experience
export const deleteExperience = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `https://vast-bayou-47622.herokuapp.com/profiles/experience/${id}`
    );
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert(" Experience removed", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// delete profile admin

export const deleteProfile = (_id) => async (dispatch) => {
  try {
    const res = await axios.delete(`https://vast-bayou-47622.herokuapp.com/profiles/${_id}`);

    dispatch({
      type: DELETE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Profile Removed", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      // payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


//delete account and profile
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("Are you sure? This cannot be undone!")) {
    try {
      const res = await axios.delete(
        `https://vast-bayou-47622.herokuapp.com/profiles`
      );
      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(
        setAlert(" Your account has been permanently deleted", "danger")
      );
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
