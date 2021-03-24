import './App.css';
import AddTask from './Components/AddTask/AddTask';
import { TaskProvider } from './Components/TaskContext/TaskContext';
import TaskList from './Components/TaskList/TaskList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UpdateTask from './Components/UpdateTask/UpdateTask';
import Error404 from './Components/Error/Error404';
import { Link } from "react-router-dom";

function App() {
  return (
    <TaskProvider>
      <Router>
        <Switch>
          <Route exact path="/updateTask/:id" component={UpdateTask}/>
          <Route exact path="/Add" component={AddTask}/>
          <Route exact path="/" component={TaskList}/>
          <Route path="/" component={Error404}/>
        </Switch>

      </Router>
    </TaskProvider>
  );
}

export default App;
