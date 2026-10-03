import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([{
    id: 1, name: "Record Lectures", completed: false
  }])

  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        { tasks.map((task) => (
          <li key={task.id}>
            <span>{task.id} - {task.name}</span>
            <button>Delete</button>
          </li>
        )) }
      </ul>
    </div>
  );
}

export default App;
