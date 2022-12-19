import { useContext } from "react";
import ExpContext from "../../Store/ExpContext";
import { Button, Card, Container } from "react-bootstrap";

const ExpenseItem = (props) => {
  const expCtx = useContext(ExpContext);
  const removeExpense = () => {
    expCtx.removeExpense(props.expense, false);
  };

  // edit expense
  const editExpense = () => {
    expCtx.removeExpense(props.expense.true);
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
