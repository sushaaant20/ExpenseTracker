import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Welcome = () => {
  return (
    <Fragment>
      <Card
        style={{
          display: "flex",
          padding: "10px",
          background: "grey",
        }}
      >
        <h3>Expense Tracker</h3>
        <span style={{ marginLeft: "auto" }}>
          <h5>
            {" "}
            Your Profile is Incomplete <Link to="/profile">Complete Now</Link>
          </h5>
        </span>
        <hr />
      </Card>
    </Fragment>
  );
};

export default Welcome;
