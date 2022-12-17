import React from "react";
import { Routes, Route } from "react-router-dom";
import Intro from "./Pages/Intro";
import AuthForm from "./components/Auth/AuthForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/intro" element={<Intro />} />
      </Routes>
    </>
  );
};

export default App;
