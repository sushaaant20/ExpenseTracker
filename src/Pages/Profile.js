import React, { useContext, useRef } from "react";
import AuthContext from "../components/Store/AuthContext";
import { Link } from "react-router-dom";
import { Card, Container, Button, Form, Row, Col } from "react-bootstrap";

const Profile = (props) => {
  const fullNameRef = useRef();
  const profileUrlRef = useRef();

  const ctx = useContext(AuthContext);

  //path to update user Profile in Firebase
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_VERY_PRIVATE_KEY}`;

  //update user Profile
  const updateProfileHandler = async (e) => {
    e.preventDefault();
    const fullName = fullNameRef.current.value;
    const profileUrl = profileUrlRef.current.value;

    try {
      const res = await fetch(`${url}`, {
        method: "POST",
        body: JSON.stringify({
          idToken: ctx.token,
          displayName: fullName,
          photoUrl: profileUrl,
          returnSecureToken: true,
        }),
        header: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        alert("Profile Updated");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container style={{ margin: "", width: "100%" }}>
      <Card
        style={{
          dispay: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span>Winners Never Quit</span>
        <span style={{ marginLeft: "auto" }}>
          Your Profile is 48% Complete
          <br />
          <Link to="/profile">Complete Now</Link>
        </span>
      </Card>
      <hr />
      <Card style={{ marginLeft: "60%", padding: "20px" }}>
        <Card.Header style={{ display: "flex" }}>
          Contact Details
          <Button style={{ marginLeft: "auto" }}>Cancel</Button>
        </Card.Header>
        <br></br>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="Name" ref={fullNameRef} />
            </Col>
            <Col>
              <Form.Control placeholder="url" ref={profileUrlRef} />
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
    </Container>
  );
};
export default Profile;
