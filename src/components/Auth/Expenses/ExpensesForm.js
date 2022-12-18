import React, { Fragment, useRef, useState } from "react";
import { Button, Container, Form, Card } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ExpenseList from "./ExpenseList";

const ExpenseForm = () => {
  const [expList, setExpList] = useState([]);

  //get user input
  const amountRef = useRef();
  const descRef = useRef();
  const categoryRef = useRef();

  const submitExpenseHandler = (e) => {
    e.preventDefault();
    const expObj = {
      id: Math.random(),
      amount: amountRef.current.value,
      description: descRef.current.value,
      category: categoryRef.current.value,
    };
    setExpList((expList) => [...expList, expObj]);
  };

  return (
    <Fragment>
      <Container
        style={{ display: "flex", marginLeft: "40%", marginTop: "2%" }}
      >
        <Card style={{ padding: "20px" }}>
          <Form>
            <Form.Group>
              <Form.Label>Expense Amount : </Form.Label>
              <Form.Control
                ref={amountRef}
                type="number"
                placeholder="$100"
              ></Form.Control>
              <Form.Label>Description </Form.Label>
              <Form.Control
                ref={descRef}
                type="text"
                placeholder="food"
              ></Form.Control>
              <Form.Label style={{ padding: "20px", marginLeft: "-13px" }}>
                Category
              </Form.Label>
              <select ref={categoryRef}>
                <option>Movie</option>
                <option>Fuel</option>
                <option>Groceries</option>
                <option>Bills</option>
              </select>
              {/* <DropdownButton title="Select" size="sm" ref={categoryRef}>
                <Dropdown.Item ref={categoryRef}>Movie</Dropdown.Item>
                <Dropdown.Item ref={categoryRef}>Fuel</Dropdown.Item>
                <Dropdown.Item ref={categoryRef}>Groceries</Dropdown.Item>
              </DropdownButton> */}
            </Form.Group>
            <Button
              style={{ padding: "5px", marginTop: "3px" }}
              type="submit"
              size="sm"
              onClick={submitExpenseHandler}
            >
              Add Expense
            </Button>
          </Form>
        </Card>
      </Container>
      <ExpenseList expenses={expList} />
    </Fragment>
  );
};

export default ExpenseForm;
