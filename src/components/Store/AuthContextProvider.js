import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";

const AuthContextProvider = (props) => {
  //state to check wether the user is authenticated;
  const [isLoggedIn, setIsLoggedIn] = useState();

  //states for userProfile
  const [fullName, setFullName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const token = localStorage.getItem("expense_token");
  const email = localStorage.getItem("expense_email");

  //check if the user has logged in or not - making the login persistent after the refresh
  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  //get userProfile Details from FireBase
  const getProfileUrl = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_VERY_PRIVATE_KEY}`;
  useEffect(() => {
    async function fetchProfile() {
      if (token) {
        try {
          const res = await axios.post(getProfileUrl, { idToken: token });
          if (res) {
            setFullName(res.data.users[0].displayName);
            setProfilePhoto(res.data.users[0].photoUrl);
            console.log(res);
          } else {
            console.log(res);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchProfile();
  }, [token]);

  // update user token
  const updateAuthInfo = (token, email) => {
    //update token in local storage and update.
    localStorage.setItem("expense_token", token);
    localStorage.setItem("email_token", email);
    if (token === "" && email === "") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };

  //update user Profile
  const updateProfile = (name, profileUrl) => {
    setFullName(name);
    setProfilePhoto(profileUrl);
  };

  const authCtx = {
    token: token,
    email: email,
    updateAuthInfo: updateAuthInfo,
    isLoggedIn: isLoggedIn,
    fullName: fullName,
    profilePhoto: profilePhoto,
    updateProfile: updateProfile,
  };

  return (
    <AuthContext.Provider value={authCtx}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
