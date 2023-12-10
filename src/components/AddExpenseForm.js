import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import {v4 as uuidv4} from 'uuid';
import { toast } from 'react-toastify'

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event)=>{
        event.preventDefault();
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        }
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
        setName('');
        setCost('');
        toast.success('New expense added successfully!', {
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
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm form-group mt-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" required className='form-control' id="name" name="name" value={name} onChange={(event)=>setName(event.target.value)} />
                </div>
                <div className="col-sm form-group mt-2">
                    <label htmlFor="cost">Cost</label>
                    <input type="text" required className='form-control' id="cost" name="cost" value={cost} onChange={(event)=>setCost(event.target.value)} />
                </div>
                <div className="col-sm d-flex align-items-end form-group mt-2">
                    <button type="submit" className='btn btn-primary'>Save</button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm;
