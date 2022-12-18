import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  return props.expenses.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        amount={expense.amount}
        description={expense.description}
        category={expense.category}
      />
    );
  });
};

export default ExpenseList;
