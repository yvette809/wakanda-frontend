import axios from "axios";
import { setAlert } from "./alert";

import { GET_PROFILE, PROFILE_ERROR } from "./types";

// GET curent user's profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:4000/profile/me");
    console.log("profile response", res);
    if(res.ok){
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    }
   
  } catch (error) {
    console.log(error);
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};
