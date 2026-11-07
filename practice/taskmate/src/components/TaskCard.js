import "./TaskCard.css"
import styles from "./TaskCard.module.css";

export const TaskCard = ({ task, handleDelete, info }) => {
  return (
    <li key={task.id} className={`taskcard ${ task.completed ? 'completed' : 'incomplete'}`}>
        <span className={ styles.title }>{task.id} - {task.name}</span>
        <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
    </li>  )
}
