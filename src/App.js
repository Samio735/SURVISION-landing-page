import { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [Expenses, setExpenses] = useState([
    {
      name: "Keeway C200 MotorCycle",
      date: "17 Jul 2023",
      price: 1000,
      checked: false,
    },
    { name: "macbook pro", date: "20 aug 2022", price: 500 },
    { name: "Peugeut 406", date: "20 aug 2052", price: 2000 },
  ]);
  const handleNewExpense = (expenseData) => {
    setExpenses((previousExpenses) => {
      previousExpenses.push(expenseData)
      console.log(previousExpenses)
      return [...previousExpenses]
    });
  };
  return (
    <div className="bg-slate-800 w-screen h-screen m-0 absolute px-4">
      <div className="text-sky-300 font-bold text-3xl flex w-full justify-center my-7">Expense Tracker Pro.</div>
      <NewExpense onSaveExpense={handleNewExpense} />
      {Expenses.map((exp) => (
        <ExpenseItem
          name={exp.name}
          date={exp.date}
          price={exp.price}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default App;
