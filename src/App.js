import React, { Fragment, useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "./components/Store/AuthContext";
import "./App.css";

import Welcome from "./Pages/Welcome";
import AuthForm from "./components/Auth/AuthForm";
import Profile from "./Pages/Profile";
import ForgotPassword from "./components/Auth/ForgotPassword";

import { expenseAction } from "./store/Expense";
import { authAction } from "./store/Auth";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const App = () => {
  const theme = useSelector((state) => state.theme.theme);
  //firebase database URL path
  const url =
    "https://expense-tracker-909bf-default-rtdb.asia-southeast1.firebasedatabase.app";

  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);

  const token = localStorage.getItem("exp_token");
  const email = localStorage.getItem("exp_email");

  //check if user has loggedin or not i.e to make login persistant after refresh
  useEffect(() => {
    if (token) {
      // setIsLoggedIn(true);
      dispatch(authAction.updateAuthInfo({ token, email }));
    }
  }, [token, email]);

  //get user profile details from firebase
  const getProfileUrl = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_VERY_PRIVATE_KEY}`;
  useEffect(() => {
    async function fetchProfile() {
      if (token) {
        try {
          const res = await axios.post(getProfileUrl, { idToken: token });
          if (res) {
            const fullName = res.data.users[0].displayName;
            const profilePhoto = res.data.users[0].photoUrl;
            dispatch(
              authAction.updateProfile({
                name: fullName,
                profileUrl: profilePhoto,
              })
            );
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

  //get all expenses from database
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`${url}/expense.json`);

      if (res.status === 200) {
        const data = res.data;
        let exp_list = [];
        let exp_total_amt = 0;
        for (const key in data) {
          const expObj = {
            id: key,
            amount: data[key].amount,
            description: data[key].description,
            category: data[key].category,
          };
          exp_list.push(expObj);
        }
        exp_list.forEach((expense) => (exp_total_amt += +expense.amount));
        console.log(exp_total_amt);
        dispatch(
          expenseAction.getExpenses({
            expList: exp_list,
            totalAmt: exp_total_amt,
          })
        );
      } else {
        alert("could not fetch data from database due to some technical error");
      }
    }
    getData();
  }, []);

  const ctx = useContext(AuthContext);
  //if theme is dark then assign dark theme css class to app div
  let themeClass;
  if (theme === "dark") document.body.className = "dark-theme";
  else document.body.className = "light-theme";

  return (
    <div className="app">
      <Routes>
        {isLoggedin && (
          <Fragment>
            <Route
              path="/"
              element={<Navigate to="/welcome" replace={true} />}
            />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/profile" element={<Profile />} />
          </Fragment>
        )}
        {!isLoggedin && <Route path="/" element={<AuthForm />} />}

        {!isLoggedin && (
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        )}
        {!isLoggedin && (
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        )}

        {isLoggedin && <Route path="/" element={<AuthForm />} />}
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </div>
  );
};

export default App;
