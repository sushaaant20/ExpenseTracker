import ExpenseItem from "./ExpenseItem";
import { useSelector } from "react-redux";

const ExpenseList = (props) => {
  const total = useSelector((state) => state.expense.total);
  //console.log(expCtx.total);

  return (
    <>
      <h2>Total {total}</h2>
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
