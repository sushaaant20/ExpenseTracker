import { useContext } from "react";
import { useDispatch } from "react-redux";
import { expenseAction } from "../../../store/Expense";
import axios from "axios";
import { Button, Card, Container } from "react-bootstrap";

const ExpenseItem = (props) => {
  const dispatch = useDispatch();

  //firebase database URL path
  const url =
    "https://expense-tracker-909bf-default-rtdb.asia-southeast1.firebasedatabase.app";

  const removeExpense = async () => {
    //need to remove from screen as well as backend
    const res = await axios.delete(`${url}/expense/${props.expense.id}.json`);
    if (res.status === 200) console.log("expense deleted successfully");
    dispatch(expenseAction.removeExpense(props.expense));
  };

  // edit expense
  const editExpense = () => {
    dispatch(expenseAction.removeExpense(props.expense));

    //show expense inputs on to expense form so user can edit it
    props.editExpense(props.expense);
  };

  return (
    <Container
      border="primary"
      style={{ display: "flex", borderColor: "grey", width: "300px" }}
    >
      <Card
        bg="secondary"
        style={{
          padding: "5px",
          marginTop: "5px",
          color: "white",
          fontFamily: "sans",
          marginLeft: "-80px",
        }}
      >
        Amount: ${props.expense.amount}
        <br />
        Description: {props.expense.description}
        <br />
        Category: {props.expense.category}
        <br />
      </Card>
      <Card
        style={{
          justifyContent: "space-between",
          marginLeft: "auto",
          borderColor: "white",
          padding: "4px",
        }}
      >
        <Button variant="secondary" size="sm" onClick={editExpense}>
          Edit
        </Button>
        <Button variant="danger" size="sm" onClick={removeExpense}>
          Delete
        </Button>
      </Card>
    </Container>
  );
};

export default ExpenseItem;
