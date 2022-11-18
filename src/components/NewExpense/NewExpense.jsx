import React, { useState } from "react";
import ExpenseFrom from "./ExpenseFrom";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setFromEditing] = useState(false);
  const onSaveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFromEditing(false);
  };

  const formEditingHandler = () => {
    setFromEditing(true);
  };
  const stopEditingHandler = () => {
    setFromEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={formEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseFrom
          onSaveExpenseData={onSaveExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
