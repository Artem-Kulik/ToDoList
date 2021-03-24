import { useContext } from 'react';
import { TaskContext } from "../TaskContext/TaskContext"
import './style.css';

const Error404 = () => {    
    return (
        <div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>404</h1>
				<h2>Page not found</h2>
			</div>
			<a href="#">Homepage</a>
		</div>
	</div>
    )
}

export default Error404;