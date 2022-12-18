import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Navbar, Nav } from "react-bootstrap";
import AuthContext from "../components/Store/AuthContext";

const Welcome = () => {
  const ctx = useContext(AuthContext);

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
      </Navbar>
    </Fragment>
  );
};

export default Welcome;
