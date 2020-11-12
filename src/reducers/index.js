import { combineReducers } from "redux";
import alert from "./alert";
import {auth} from "./auth";
import {profile} from "./profile";
import {post} from "./post";
import {eventsReviewCreateReducer,eventDetailsReducer,eventListReducer} from "./events"
import {message} from "./message";
// import EventDetails from "../pages/EventDetails";


export default combineReducers({
  alert: alert,
  auth: auth,
  profile: profile,
  post: post,
  message: message,
  eventsList:eventListReducer,
  eventReviewCreate:eventsReviewCreateReducer,
  eventDetails:eventDetailsReducer,
  
});


