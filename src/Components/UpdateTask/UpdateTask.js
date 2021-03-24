import { useContext, useState } from "react";
import { useParams,  Redirect} from "react-router-dom";
import { TaskContext } from "../TaskContext/TaskContext";

const UpdateTask = () => {
    const {id} = useParams();
    const [tasks, setTasks] = useContext(TaskContext)
    const currentTask = tasks.find(task => task.id == id);

    const [name, setName] = useState(currentTask.name);
    const [description, setDescription] = useState(currentTask.description);

    const [isUpdated, setIsUpdated] = useState(false);
   
    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateDescription = (e) => {
        setDescription(e.target.value);
    }

    const UpdateTask = (e) => {
        e.preventDefault();
        const newTasks = tasks.map(task => (
            task.id != id ? task : {name: name, description: description, id: id}
        ));
        setTasks(newTasks);
        setIsUpdated(true);
    }
   
    if(isUpdated === false)
    {
    return (
        <div>
            <form onSubmit={UpdateTask}>
                <label>Name:</label>
                <input onChange={updateName} name="name" value={name}/>

                <label>Description:</label>
                <input onChange={updateDescription} name="description" value={description}/>

                <button type="submit">Update</button>
            </form>
        </div>
    )
    }
    else {
        return <Redirect to="/"/>
    }
}

export default UpdateTask;