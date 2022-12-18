import React, { Fragment, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "./components/Store/AuthContext";

import Welcome from "./Pages/Welcome";
import AuthForm from "./components/Auth/AuthForm";
import Profile from "./Pages/Profile";
import ForgotPassword from "./components/Auth/ForgotPassword";

const App = () => {
  const ctx = useContext(AuthContext);
  return (
    <>
      <Routes>
        {ctx.isLoggedIn && (
          <Fragment>
            <Route
              path="/"
              element={<Navigate to="/welcome" replace={true} />}
            />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/profile" element={<Profile />} />
          </Fragment>
        )}
        {!ctx.isLoggedIn && <Route path="/" element={<AuthForm />} />}

        {!ctx.isLoggedIn && (
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        )}
        {!ctx.isLoggedIn && (
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        )}

        {ctx.isLoggedIn && <Route path="/" element={<AuthForm />} />}
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </>
  );
};

export default App;
