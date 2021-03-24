import { useContext } from 'react';
import { TaskContext } from "../TaskContext/TaskContext"
import TaskItem from '../TaskItem/TaskItem';
import { Link } from "react-router-dom";

const TaskList = () => {
    const [tasks, setTasks] = useContext(TaskContext);
    console.log(tasks);
    return (
        <div>
          <Link to="/Add">Add</Link>
            {
                tasks.map(task => (
                    <TaskItem name={task.name} description={task.description} id={task.id} />
                ))
            }
        </div>
    )
}

export default TaskList;