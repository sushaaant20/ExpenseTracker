import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth";
import ExpenseReducer from "./Expense";

const store = configureStore({
  reducer: { auth: AuthReducer, expense: ExpenseReducer },
});

export default store;
