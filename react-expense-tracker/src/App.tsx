import './App.css'
import ExpenseList from "./components/expense-tracker/components/ExpenseList.tsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from "react";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter.tsx";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm.tsx";

function App() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [expenses, setExpenses] = useState([
        {id: 1, description: 'Car Insurance', amount: 294, category: 'Insurance'},
        {id: 2, description: 'Rent', amount: 1000, category: 'Bills'},
        {id: 3, description: 'Phone', amount: 35, category: 'Bills'},
        {id: 4, description: 'Fuel', amount: 40, category: 'Car'},
    ])

    const visibleExpense = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses

    return (
        <>
            <div className="mb-5 card">
                <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
            </div>
            <div className="mb-3">
                <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)}/>
            </div>
            <div className="card">
                <ExpenseList expenses={visibleExpense} onDelete={((id) => {
                    setExpenses(expenses.filter(expense => expense.id !== id))
                })}/>
            </div>
        </>
    )
}

export default App
