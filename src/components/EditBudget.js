import React, { useState } from 'react'
import { toast } from 'react-toastify'

const EditBudget = (props) => {
    const[value, setValue] = useState(props.budget);

    const handleClick = () => {
        props.handleSaveClick(value);
        toast.success('Budget edited successfully!', {
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
        <>
        <input type="number" required className='form-control mr-5' id='name' name='name' value={value} onChange={(event)=>setValue(event.target.value)} />
        <button type='button' className='btn btn-sm btn-primary' onClick={handleClick}>Save</button>
        </>
    )
}

export default EditBudget
