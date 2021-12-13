import React from 'react'

const Task = ({task}) => {
    const deleteTask = async()=>{
        console.log(task._id)
        const res = await fetch(`http://127.0.0.1:5000/api/task/${task._id}`,{
            method:"DELETE"
        })
    }

    return (
        <div className="alert alert-primary d-flex align-items-center justify-content-between mb-2" role="alert">
            {task.name}
            <div>
                <button className='btn btn-danger' onClick={deleteTask}>Delete</button>
            </div>
        </div>
    )
}

export default Task
