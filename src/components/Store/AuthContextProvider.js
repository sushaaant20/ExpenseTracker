import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";

const AuthContextProvider = (props) => {
  //state to check wether the user is authenticated;
  const [isLoggedIn, setIsLoggedIn] = useState();
  const token = localStorage.getItem("expense_token");

  //check if the user has logged in or not - making the login persistent after the refresh
  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  // update user token
  const updateToken = (token) => {
    //update token in local storage and update.
    localStorage.setItem("expense_token", token);
    setIsLoggedIn(true);
  };

  const authCtx = {
    token: token,
    isLoggedIn: isLoggedIn,
    updateToken: updateToken,
  };
  return (
    <AuthContext.Provider value={authCtx}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
