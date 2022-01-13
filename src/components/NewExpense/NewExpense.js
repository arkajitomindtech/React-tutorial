import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
  const saveExpenseDataHadler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onSubmeitExpenseData(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={saveExpenseDataHadler} />
    </div>
  );
};

export default NewExpense;
