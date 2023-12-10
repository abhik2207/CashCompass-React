import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    const totaLExpenses = expenses.reduce((total, item)=>{
        return (total = total + item.cost);
    }, 0);

    const alertType = totaLExpenses > budget ? 'danger' : 'success';

    return (
        <div className={`alert alert-${alertType}`} role='alert'>
            <span>Remaining: ${budget-totaLExpenses}</span>
        </div>
    )
}

export default Remaining;
