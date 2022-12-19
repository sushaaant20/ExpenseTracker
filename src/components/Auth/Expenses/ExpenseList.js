import ExpenseItem from "./ExpenseItem";
import ExpContext from "../../Store/ExpContext";
import { useContext } from "react";

const ExpenseList = (props) => {
  const expCtx = useContext(ExpContext);
  //console.log(expCtx.total);

  return (
    <>
      <h2>Total {expCtx.total}</h2>
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            editExpense={props.editExpense}
          />
        );
      })}
    </>
  );
};

export default ExpenseList;
