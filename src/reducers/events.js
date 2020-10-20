import {
  EVENTS_CREATE_REVIEW_REQUEST,
  EVENTS_CREATE_REVIEW_SUCCESS,
  EVENTS_CREATE_REVIEW_FAIL,
  EVENTS_CREATE_REVIEW_RESET,
  EVENT_DETAILS_SUCCESS,
  EVENT_DETAILS_FAIL,
} from "../actions/types";

export const eventDetailsReducer = (
  state = { event: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case EVENT_DETAILS_SUCCESS:
      return { loading: false, event: action.payload };
    case EVENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventsReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENTS_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case EVENTS_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case EVENTS_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case EVENTS_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};
