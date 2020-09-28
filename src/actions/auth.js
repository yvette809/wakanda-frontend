import axios from "axios";
import setAuthToken from "../components/utils/setAuthToken";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

// load user
export const loadUser = () => async (dispatch) => {
  // if (localStorage.token) {
  //   setAuthToken(localStorage.token);
  // }
  try {
    const res = await axios.get("http://localhost:4000/auth");
    console.log("user response", res.data);

    dispatch({
      type: USER_LOADED,
      Payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post(
      "http://localhost:4000/users/register",
      body,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//Login user

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      "http://localhost:4000/auth/login",
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout user
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
