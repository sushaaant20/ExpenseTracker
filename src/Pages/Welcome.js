import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Navbar, Nav, Button } from "react-bootstrap";
import AuthContext from "../components/Store/AuthContext";
import axios from "axios";
import Logout from "./Logout";
import ExpenseForm from "../components/Auth/Expenses/ExpensesForm";

const Welcome = () => {
  const ctx = useContext(AuthContext);
  const verifyEmailUrl = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_VERY_PRIVATE_KEY}`;

  //  EMAIL VERIFICATION
  const verifyEmailHandler = async (e) => {
    try {
      const res = await axios.post(verifyEmailUrl, {
        requestType: "VERIFY_EMAIL",
        idToken: ctx.token,
      });
      if (res.status === 200) {
        alert("Email Verified Successfully");
        console.log(res);
      } else {
        alert("Email verification Failed");
        console.log(res);
      }
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  };
  return (
    <Fragment>
      {/* <Card
        style={{
          display: "flex",
          padding: "10px",
          background: "grey",
        }}
      >
        <h3>Expense Tracker</h3>
        {!ctx.fullName && !ctx.profilePhoto && (
          <span style={{ marginLeft: "auto" }}>
            <h5>
              Your Profile is Incomplete <Link to="/profile">Complete Now</Link>
            </h5>
          </span>
        )}
        {ctx.fullName && ctx.profilePhoto && (
          <span style={{ marginLeft: "auto" }}>
            <h5>
              Your Profile is Complete <Link to="/profile">Edit</Link>
            </h5>
          </span>
        )}
      </Card> */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Expense Tracker</Navbar.Brand>
          <Button onClick={verifyEmailHandler}>Verify Email</Button>
          {/* <Nav className="me-auto"> */}
          {!ctx.fullName && !ctx.profilePhoto && (
            <Navbar.Text>
              Your Profile is Incomplete
              <br />
              <Link to="/profile">Complete Now</Link>
            </Navbar.Text>
          )}
          {ctx.fullName && ctx.profilePhoto && (
            <Navbar.Text>
              Your Profile is Complete <br />
              <Link to="/profile">EDIT</Link>
            </Navbar.Text>
          )}
          {/* </Nav> */}
        </Container>
        <Logout />
      </Navbar>
      <ExpenseForm />
    </Fragment>
  );
};

export default Welcome;
