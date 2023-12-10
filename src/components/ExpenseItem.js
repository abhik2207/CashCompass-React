import React, { useContext } from 'react'
import { TiDelete } from "react-icons/ti"
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
        toast.success('Expense deleted successfully!', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className='badge badge-pill bg-primary rounded-pill me-3'>
                    ${props.cost}
                </span>
                <TiDelete size='1.5em' onClick={handleDeleteExpense} />
            </div>
        </li>
    )
}

export default ExpenseItem;
