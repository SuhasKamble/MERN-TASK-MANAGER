import React, { useEffect, useState } from 'react'
import AddTask from './AddTask'
import Navbar from './Navbar'
import Task from './Task'

const App = () => {
  const [tasks,setTasks] = useState([]);
  useEffect(async()=>{
    const res = await fetch("http://127.0.0.1:5000/api/task",{method:"GET"})
    const data = await res.json()
    setTasks(data);
  },[tasks])

  return (
    <>
      <Navbar/>
      <div className="container">
        <AddTask/>
        {
          tasks.map((task)=>{
            return   <Task key={task._id} task={task}/>
          })
        }
     
      </div>
    </>
  )
}

export default App
