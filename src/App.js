import "./expenseItemList.css"
import ExpenseItemList from "./expenseItemList";
import NewExpense from "./newExpenseItem";
import { useState } from "react";

//let date = new Date().toLocaleString('default', { month: 'short' });

function App() {


  //  useState([])
   const [expenses, setExpenses] = useState(
     [
      {
      index:0,
      expenseItem: "Car Insurance",
      date: new Date("July 21, 2021"),
      price: 132.7
    },
    {
      index:1,
      expenseItem: "Book",
      date: new Date("June 2, 2022"),
      price: 27.6
    },
    {
      index:2,
      expenseItem: "AK 47",
      date: new Date("Feb 4, 2023"),
      price: 425.2
    },
    {
      index:3,
      expenseItem: "Glock 17",
      date: new Date("May 5, 2021"),
      price: 99.2
    }
  ]);

  const addExpense = (newExpense)=>
  {
     setExpenses([...expenses,
    {
      index:expenses.length+1,
      expenseItem: newExpense.expenseItem,
      date: newExpense.date,
      price: newExpense.price
      }])

      console.table({
        index:expenses.length+1,
        expenseItem: newExpense.expenseItem,
        date: newExpense.date,
        price: newExpense.price
      })
      
      console.log("App js Added Excecuted")
      console.log(expenses)
  }
    
    //  console.log(expenses.length)
    
  return (
    <>
      <NewExpense items = {expenses} addExpense = {addExpense} />
      {/* <ExpenseItem/> */}
      <ExpenseItemList expenses = {expenses}/>
    </>
  );
}

export default App;
