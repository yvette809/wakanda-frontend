import axios from "axios";
import {
  EVENTS_CREATE_REVIEW_REQUEST,
  EVENTS_CREATE_REVIEW_SUCCESS,
  EVENTS_CREATE_REVIEW_FAIL,
  EVENT_DETAILS_SUCCESS,
  EVENT_DETAILS_FAIL,
  EVENTS_SUCCESS,
  EVENTS_FAIL
} from "../actions/types";

export const createEventReview = (eventId, review) => async (dispatch) => {
  try {
    dispatch({
      type: EVENTS_CREATE_REVIEW_REQUEST
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      }
    };

    console.log(review)

    await axios.post(
      `https://vast-bayou-47622.herokuapp.com/events/${eventId}/reviews`,
      review,
      config
    );

    dispatch({
      type: EVENTS_CREATE_REVIEW_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: EVENTS_CREATE_REVIEW_FAIL,
     
    });
  }
};



//event details
export const listEventDetails = (_id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://vast-bayou-47622.herokuapp.com/events/${_id}`
    );

    console.log("event response is", res);
    dispatch({
      type: EVENT_DETAILS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EVENT_DETAILS_FAIL,
      //   payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// get all events

export const getEvents = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://vast-bayou-47622.herokuapp.com/events`
    );

    dispatch({
      type: EVENTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EVENTS_FAIL
      //   payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
