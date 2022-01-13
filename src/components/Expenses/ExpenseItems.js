import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseItems.css";

function ExpenseItems(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated!");
    console.log("Clicked!!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate itemDates={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItems;
