import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFillter from "./components/ExpenseFillter";
import ExpenseForm from "./components/ExpenseForm";

const Expense = () => {
  const [expenses, setExpenses] = useState([
    { description: "body of foot", amount: 24, category: "banana", id: 1 },
    { description: "here we go again", amount: 32, category: "apple", id: 2 },
    { description: "here is my name ", amount: 34, category: "water", id: 3 },
    { description: "test for me ", amount: 64, category: "orange", id: 4 },
  ]);
  const [category, setCategory] = useState("");
  const fillterExpenses = category
    ? expenses.filter((expense) => expense.category == category)
    : expenses;
  return (
    <>
      <h1>Expense this fors </h1>
      <ExpenseForm
        submition={(date: any) => setExpenses([...expenses, date])}
      />
      <br />
      <ExpenseFillter onChange={(value) => setCategory(value)} />
      <ExpenseList
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
        expenses={fillterExpenses}
      />
    </>
  );
};

export default Expense;
