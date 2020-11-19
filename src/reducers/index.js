import { combineReducers } from "redux";
import alert from "./alert";
import {auth} from "./auth";
import {profile} from "./profile";
import {post} from "./post";
import {eventsReviewCreateReducer,eventDetailsReducer,eventListReducer,eventDeleteReducer} from "./events"

// import EventDetails from "../pages/EventDetails";


export default combineReducers({
  alert: alert,
  auth: auth,
  profile: profile,
  post: post,
  eventsList:eventListReducer,
  eventReviewCreate:eventsReviewCreateReducer,
  eventDetails:eventDetailsReducer,
  eventDelete:eventDeleteReducer
  
});


