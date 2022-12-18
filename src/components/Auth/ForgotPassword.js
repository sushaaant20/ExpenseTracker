import React, { useRef, useState } from "react";
import axios from "axios";
import { Button, Form, Card, Container } from "react-bootstrap";

const ForgotPassword = () => {
  //const get user email to send reset link
  const emailRef = useRef();
  const [status, setStatus] = useState("");

  const resetPasswordUrl = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_VERY_PRIVATE_KEY}`;
  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    setStatus("pending");
    try {
      const res = await axios.post(resetPasswordUrl, {
        requestType: "PASSWORD_RESET",
        email: emailRef.current.value,
      });
      if (res.status === 200) {
        alert("Password Reset Link has been sent on your Email");
        setStatus("Completed");
      } else {
        alert("Error while sending the email");
      }
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };
  return (
    <Container style={{}}>
      <Card
        style={{
          padding: "20px",
          marginLeft: "40%",

          height: "250px",
          width: "350px",
          marginTop: "10%",
        }}
      >
        <Card.Header>Reset Form</Card.Header>
        <Form style={{ padding: "20px" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={resetPasswordHandler}
          >
            Send Link
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
export default ForgotPassword;
