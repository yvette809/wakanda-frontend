import React, { useState } from "react";
import {Redirect} from "react-router-dom"
import FacebookLogin from "react-facebook-login";

const FacebookAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    setIsLoggedIn(true);
    setUserID(response.userID);
    setName(response.name);
    setEmail(response.email);
    setPicture(response.picture.data.url);
  };

  const componentClicked = () => {
    console.log("clicked");
  };

  
  return(
    <>
    {isLoggedIn?
     <div style={{ width: "400px", margin:"auto", background:"#f4f4f4", padding: "20px" }}>
    <img src={picture} alt={picture} />
    <h2>Welcome {name}</h2>
    Email: {email}
  </div>
  : 
  
  <FacebookLogin
  appId="369423881144520"
  autoLoad={true}
  fields="name,email,picture"
  onClick={componentClicked}
  callback={responseFacebook}
/>}
      {/* {fbContent} */}
      </>
  ) 
};

export default FacebookAuth;
