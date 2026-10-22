import { useState } from 'react';
import { TaskCard } from './TaskCard'
import { AlertCard } from './AlertCard'

export const TaskList = (props, info) => {
  const [tasks, setTasks] = useState([
    {id: 1, name: "Record Lectures", completed: true},
    {id: 2, name: "Upload Lectures", completed: false},
    {id: 3, name: "Grade Assignments", completed: false},
  ]);
  const [show, setShow] = useState(true);


  function handleDelete(id){
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
        <>
        <h1>Task List {props.title} {props.subtitle}</h1>
            <ul>
                <button className='toggle' onClick={() => setShow(!show)}>Toggle</button>
                { show && tasks.map((task) => (
                    <TaskCard key={task.id} info={info} task={task} handleDelete={handleDelete} />
                )) }
            </ul>
            <AlertCard result="success">
                <p className="title">Lorem ipsum dolor sit amet.</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, non.</p>
            </AlertCard>
            
            <AlertCard result="warning">
                <p className="title">Lorem ipsum dolor sit amet.</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, non.</p>
            </AlertCard>

        </>
    )
}
