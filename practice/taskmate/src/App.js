import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([{
    id: 1, name: "Record Lectures", completed: false
  }])

  function handleDelete(id){
    setTasks(tasks.filter(task => id !== task.id))
}

  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        { tasks.map((task) => (
          <li key={task.id}>
            <span>{task.id} - {task.name}</span>
            <button onClick={handleDelete(task.id)} className='delete'>Delete</button>
          </li>
        )) }
      </ul>
    </div>
  );
}

export default App;
