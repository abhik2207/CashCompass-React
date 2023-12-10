import React, { useContext, useEffect, useState } from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext'

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

    useEffect(()=>{
        setFilteredExpenses(expenses)
    }, [expenses]);

    const handleChange = (event) => {
        const searchResults = expenses.filter((filteredExpense)=> filteredExpense.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredExpenses(searchResults);
    }

    return (
        <>
            <input type='text' className='form-control mb-2 mr-sm-2' placeholder='Type to search...' onChange={handleChange} />
            <ul className='list-group'>
                {expenses.length===0 ? (<h6>No expenses added yet</h6>) : filteredExpenses.map((expense) => (
                    <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
                ))}
            </ul>
        </>
    )
}

export default ExpenseList;