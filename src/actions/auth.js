import axios from "axios";
import setAuthToken from "../components/utils/setAuthToken";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  GET_USERS,
  GETUSERS_FAIL,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE
} from "./types";

// load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("https://vast-bayou-47622.herokuapp.com/auth");
    console.log("user response", res.data);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// get all users

export const getUsers = () => async (dispatch) => {
  
  try {
    const res = await axios.get("https://vast-bayou-47622.herokuapp.com/users");
    console.log("users are", res.data);
    dispatch({
      type: GET_USERS,
      Payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GETUSERS_FAIL,
    });
  }
};

// Register User
export const register = ({ name, username, email, password}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name,username, email, password});

  try {
    const res = await axios.post(
      "https://vast-bayou-47622.herokuapp.com/users/register",
      body,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser())

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
      "https://vast-bayou-47622.herokuapp.com/auth/login",
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser())
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
  dispatch({type:CLEAR_PROFILE})
};
