import { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onChangeExpenseDate = (expenseData) => {
    // console.log(expenseData);
    setFilteredYear(expenseData);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={filteredYear} onSubmitEvent={onChangeExpenseDate} />
        <ExpenseItems
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItems>
        <ExpenseItems
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItems>
        <ExpenseItems
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItems>
        <ExpenseItems
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItems>
      </Card>
    </div>
  );
}

export default Expenses;
