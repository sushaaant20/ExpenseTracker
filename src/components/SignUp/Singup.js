import React, { useEffect, useRef, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";

import Form from "react-bootstrap/Form";

const Singup = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  // clear fo

  const signupHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_VERY_PRIVATE_KEY}`;
    console.log(url);

    if (passwordRef.value === confirmPasswordRef.value) {
      console.log("password and confirm password matches!!");
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          console.log("UserSigned Up");
        } else {
          let errorMessage = "Authentication Failed";
          alert(errorMessage);
          throw new Error(errorMessage);
        }
      });
    } else {
      alert("Password Does not match");
    }

    //clearing the input fields after form submission

    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
  };

  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10%",
          backgroundColor: "white",
          borderColor: "black",
          border: "1px",
        }}
      >
        <Card
          style={{
            backgroundColor: "white",
            borderColor: "black",
            border: "1px",
            padding: "30px",
          }}
          className="square border border-primary"
        >
          <h3>Sign Up</h3>
          <Form
            type="submit"
            required={true}
            style={{ padding: "20px" }}
            onSubmit={signupHandler}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                required="true"
                type="email"
                placeholder="Enter email"
                ref={emailRef}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                required="true"
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                required="true"
                type="password"
                placeholder="Confirm Password"
                ref={confirmPasswordRef}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default Singup;
