import { useDispatch } from "react-redux";
import { authAction } from "../store/Auth";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //clearing token and email from local storeage and go to login
  const logoutHandler = (e) => {
    dispatch(authAction.updateAuthInfo({ token: "", email: "" }));
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
