import React, { useContext, useRef } from "react";
import AuthContext from "../components/Store/AuthContext";
import { Link } from "react-router-dom";
import {
  Card,
  Container,
  Button,
  Form,
  Row,
  Col,
  Navbar,
  Nav,
} from "react-bootstrap";
import axios from "axios";

const Profile = (props) => {
  const fullNameRef = useRef("");
  const profileUrlRef = useRef("");

  const ctx = useContext(AuthContext);

  //path to update user Profile in Firebase
  const updateProfileUrl = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_VERY_PRIVATE_KEY}`;

  //update user Profile
  const updateProfileHandler = (e) => {
    e.preventDefault();
    const fullName = fullNameRef.current.value;
    const profileUrl = profileUrlRef.current.value;

    axios
      .post(updateProfileUrl, {
        idToken: ctx.token,
        displayName: fullName,
        photoUrl: profileUrl,
        returnSecureToken: true,
      })
      .then((res) => {
        alert("profile updated successfully");
        ctx.updateProfile(fullName, profileUrl);
      })
      .catch((error) => {
        alert("Error while Updating profile");
        throw new Error(error);
      });
  };
  return (
    <>
      {/* <Card
        style={{
          dispay: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span>Winners Never Quit</span>
        {!ctx.fullName && ctx.profilePhoto && (
          <span style={{ marginLeft: "auto" }}>
            Your Profile is 48% Complete
            <br />
            <Link to="/profile">Complete Now</Link>
          </span>
        )}
      </Card>
      <hr />
      <Card style={{ marginLeft: "60%", padding: "20px" }}>
        <Card.Header style={{ display: "flex" }}>
          Contact Details
          <Button style={{ marginLeft: "auto" }}>Cancel</Button>
        </Card.Header>
        <br></br> */}
      <Navbar bg="dark" variant="dark">
        <Container style={{ display: "flex", justifyContent: "space-around" }}>
          <Navbar.Brand>Winners Never Quit, Quitters Never Win!!</Navbar.Brand>
          <Nav className="me-auto" style={{ marginLeft: "30rem" }}>
            <Nav.Link href="#home">
              Your Profile is 60%
              <Link to="/profile"> Complete Now</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Card
        style={{
          padding: "20px",
          marginLeft: "54%",
          marginTop: "15px",
          width: "500px",
          borderColor: "white",
        }}
      >
        <Form>
          <Row>
            <Col>
              <Form.Control
                placeholder="Name"
                ref={fullNameRef}
                defaultValue={ctx.fullName}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="url"
                ref={profileUrlRef}
                defaultValue={ctx.profilePhoto}
              />
            </Col>
          </Row>
          <Button
            variant="danger"
            onClick={updateProfileHandler}
            style={{ marginTop: "5px" }}
          >
            Update
          </Button>
        </Form>
      </Card>
      {/* </Card> */}
    </>
  );
};
export default Profile;
