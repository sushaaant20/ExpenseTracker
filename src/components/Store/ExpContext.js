import { createContext } from "react";

const ExpContext = createContext({
  expenseList: [],
  addExpense: (expense) => {},
  removeExpense: (id) => {},
});

export default ExpContext;
