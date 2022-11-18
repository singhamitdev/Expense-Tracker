import React, { useState } from "react";
import "./App.css";
import Expenses from "../src/components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_DATA = [
  {
    id: "e1",
    title: "Rent",
    amount: 3250,
    date: new Date(2022, 5, 5),
  },
  {
    id: "e2",
    title: "Internet",
    amount: 650,
    date: new Date(2021, 1, 6),
  },
  {
    id: "e3",
    title: "Electricity",
    amount: 2050,
    date: new Date(2020, 4, 4),
  },
  {
    id: "e4",
    title: "Laundry",
    amount: 1000,
    date: new Date(2020, 2, 3),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_DATA);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
