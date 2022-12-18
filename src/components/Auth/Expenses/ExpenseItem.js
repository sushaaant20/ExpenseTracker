const ExpenseItem = (props) => {
  return (
    <li>
      Amount: {props.amount}
      Description:{props.description}
      Category:{props.category}
    </li>
  );
};

export default ExpenseItem;
