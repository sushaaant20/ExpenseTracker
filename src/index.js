import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./components/Store/AuthContextProvider";
import ExpContextProvider from "./components/Store/ExpContextProvider";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ExpContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ExpContextProvider>
  </AuthContextProvider>
);
