import axios from "axios";
import { Alert } from "react-bootstrap";
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR } from "./types";

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
    
      dispatch({
        type: REGISTER_FAIL
      })
    
   
  } catch (error) {
    console.log(error);
  }
 
};

//Login user

// Register User

export const login = ({  email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({email, password});

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
  }
  dispatch({
    type: LOGIN_FAIL
  })
 
};
