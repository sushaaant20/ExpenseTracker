import React from "react";
import Signup from "./components/SignUp/Singup";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route to="/" element={<Singup />} />
    //   </Routes>
    // </BrowserRouter>
    <>
      <Signup />
    </>
  );
};

export default App;
