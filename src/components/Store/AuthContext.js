import { createContext } from "react";
const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  updateToken: (token) => {},
});

export default AuthContext;
