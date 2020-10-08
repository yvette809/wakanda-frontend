import axios from "axios";
import { FETCH_MESSAGES, ADD_MESSAGES, MESSAGE_ERROR } from "./types";

// Get messages
export const fetchMessages = (username) => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:/4000/profiles/messages"); 
    console.log("message res is", res);
    dispatch({
      type: FETCH_MESSAGES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: MESSAGE_ERROR,
      // payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add message
export const addMessage = (message) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "http://localhost/4000/profiles/messages",
      message,
      config
    );
    if (res.ok) {
      dispatch({
        type: ADD_MESSAGES,
        payload: res.data,
      });
    } else {
      dispatch({
        type: MESSAGE_ERROR,
        // payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

