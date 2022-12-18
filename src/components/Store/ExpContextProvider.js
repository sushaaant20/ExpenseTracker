import { useState, useEffect } from "react";
import ExpContext from "./ExpContext";

import axios from "axios";

const ExpContextProvider = (props) => {
  const [expList, setExpList] = useState([]);

  //firebas backend
  const url = `https://expense-tracker-909bf-default-rtdb.asia-southeast1.firebasedatabase.app`;

  //fetch details after every page refresh
  useEffect(() => {
    const getExpenses = async () => {
      const res = await axios.get(`${url}/expense.json`);
      if (res.status === 200) {
        const data = res.data;
        let exp_list = [];
        for (const key in data) {
          const expObj = {
            id: key,
            amount: data[key].amount,
            description: data[key].description,
            category: data[key].category,
          };
          exp_list.push(expObj);
        }
        setExpList(exp_list);
      } else {
        alert("Could Not fetch Data");
      }
    };
    getExpenses();
  }, []);

  //adding expenses
  const addExpense = async (expense) => {
    // update expense details into firebase
    const res = await axios.post(`${url}/expense.json`, expense);
    console.log("res", res);
    if (res.status === 200) {
      alert("Data Stored!!");
      setExpList((expList) => [...expList, expense]);
    } else {
      alert("Error storing expense data");
    }
  };

  const removeExpense = (id) => {};

  const expCtx = {
    expenseList: expList,
    addExpense: addExpense,
    removeExpense: removeExpense,
  };

  return (
    <ExpContext.Provider value={expCtx}>{props.children}</ExpContext.Provider>
  );
};
export default ExpContextProvider;
