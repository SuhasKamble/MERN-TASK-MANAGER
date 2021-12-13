import React, { useState } from 'react'

const AddTask = () => {
    const [name, setName] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();
        const data = {name:name};
        const res = await fetch('http://127.0.0.1:5000/api/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        setName("");
    }
    return (
        <form className='mb-3'>
            <h3 className="my-2">Add Task</h3>
            <div className="mb-2">
                <label htmlFor="name">Title</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
            </div>
            <button className="btn btn-primary" onClick={submitForm} type="submit">Submit</button>
        </form>
    )
}

export default AddTask
