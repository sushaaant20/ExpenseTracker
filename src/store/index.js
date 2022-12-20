import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth";
import themeReducer from "./Theme";
import PremiumReducer from "./Premium";
import ExpenseReducer from "./Expense";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    expense: ExpenseReducer,
    theme: themeReducer,
    premium: PremiumReducer,
  },
});

export default store;
