import "./ExpenseDate.css";

function ExpenseDate(props) {
  const day = props.itemDates.toLocaleString("en-US", { day: "2-digit" });
  const month = props.itemDates.toLocaleString("en-US", { month: "long" });
  const year = props.itemDates.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
