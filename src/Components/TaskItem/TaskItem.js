import { useContext } from "react";
import { TaskContext } from "../TaskContext/TaskContext";
import { Link } from "react-router-dom";

const TaskItem = ({name, description, id}) => {
const [tasks, setTasks] = useContext(TaskContext)
    return (
        <div>            
            <h2>Name: {name}</h2>
            <h2>Description: {description}</h2>
            <button onClick={ () => {setTasks(tasks.filter(task => (task.id != id)))}}>Delete</button>
            <Link to = {{pathname:`/updateTask/${id}`}}>Update</Link>
            <hr/>
        </div>    
    );
}

export default TaskItem;

/*
<Link to={{ pathname: `/updateItem/${id}`}}>Update</Link>
*/
