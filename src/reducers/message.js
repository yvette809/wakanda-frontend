import {
    FETCH_MESSAGES,
    ADD_MESSAGES,
    MESSAGE_ERROR

  } from '../actions/types';
  
  const initialState = {
    messages:[],
    loading: true,
    error:{}
    
  };
  
  export default function(state = initialState, action) {

    switch (action.type) {
      case FETCH_MESSAGES:
        return {
          ...state,
          messages: action.payload,
          loading: false
        };
      
      case ADD_MESSAGES:
        return {
          ...state,
          messages: [action.payload, ...state.messages],
          loading: false
        };
     
      case MESSAGE_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false
        };
      
      default:
        return state;
    }
  }