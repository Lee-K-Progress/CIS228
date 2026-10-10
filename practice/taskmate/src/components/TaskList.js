import { useState } from 'react';

export const TaskList = (props) => {
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
                    <li key={task.id} className={task.completed ? 'completed' : 'incomplete'}>
                        <span>{task.id} - {task.name}</span>
                        <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
                    </li>
                )) }
            </ul>
        </>
    )
}
