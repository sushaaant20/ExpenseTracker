import AuthContext from "../components/Store/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Logout = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  //clearing token and email from local storeage and go to login
  const logoutHandler = (e) => {
    ctx.updateAuthInfo("", "");
    localStorage.removeItem("email_token");
    localStorage.removeItem("expense_token");
  };
  return (
    <>
      {" "}
      <Button onClick={logoutHandler}>Logout</Button>
    </>
  );
};

export default Logout;
