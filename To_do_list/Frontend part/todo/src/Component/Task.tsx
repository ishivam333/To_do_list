import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faSquareCheck, faSquareXmark, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { completeTask, deleteToDoListById, getAllToDoList, inCompleteTask } from "../Service/todoservice";

type Todo = {
  id: number;
  title: string;
  description: string;
  status: string; 
}

const Task: React.FC = () => {
  const history = useHistory();
  const [taskToDo, setTaskToDo] = useState<Todo[]>([]);

  

  const deleteTask = (id: number) => {
    deleteToDoListById(id)
      .then(() => fetchTasks())
      .catch((error) => console.log(error));
  }

  const updateTask = (id: number) => {
    history.push(`/update-task/${id}`);
  }

  const markAsComplete = (id: number) => {
    completeTask(id)
      .then(() => fetchTasks())
      .catch((error) => console.log(error));
  }

  const markAsIncomplete = (id: number) => {
    inCompleteTask(id)
      .then(() => fetchTasks())
      .catch((error) => console.log(error));
  }

  const fetchTasks = () => {
    getAllToDoList()
      .then((response) => {
        setTaskToDo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ margin: '0px 50px' }}>
      <h1 style={{ textAlign: "center" }}>List of Todos</h1>
      <Link to='/add-task' className='btn btn-primary mb-2'>Add Task</Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Todo Title</th>
            <th>Todo Description</th>
            <th>Todo Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {taskToDo.map(task =>
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status ? "Yes" : "No"}</td>
              <td>
                <button onClick={() => updateTask(task.id)} style={{ marginRight: '5px', border: '0px' }}>
                  <FontAwesomeIcon icon={faFilePen} size="xl" />
                </button>
                <button onClick={() => deleteTask(task.id)} style={{ marginRight: '5px', border: '0px' }}>
                  <FontAwesomeIcon icon={faTrashCan} size="xl" />
                </button>
                <button onClick={() => markAsComplete(task.id)} style={{ marginRight: '5px', border: '0px' }}>
                  <FontAwesomeIcon icon={faSquareCheck} size="xl" style={{ color: "#25b13d" }} />
                </button>
                <button onClick={() => markAsIncomplete(task.id)} style={{ marginRight: '5px', border: '0px' }}>
                  <FontAwesomeIcon icon={faSquareXmark} size="xl" style={{ color: "#ff0000" }} />
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Task;
