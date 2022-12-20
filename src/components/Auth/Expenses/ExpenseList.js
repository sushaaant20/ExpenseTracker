import ExpenseItem from "./ExpenseItem";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import PremiumFeatures from "./PremiumFeatures";
//import { premiumAction } from "../../store/Premium";

const ExpenseList = (props) => {
  const total = useSelector((state) => state.expense.total);
  const dispatch = useDispatch();
  //console.log(expCtx.total);

  return (
    <>
      <h2>Total {total}</h2>
      {total >= 10000 && <PremiumFeatures expenses={props.expenses} />}
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
