import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Task from "./Task";

const TaskList = () => {
  let [tasks, setTasks] = useState([]);
  let params = useParams();
  let url = "http://localhost:3000/api";
  async function getTasks() {
    let fetchedTasks = await fetchTasks(params.id);
    console.log(fetchedTasks.tasks);
    setTasks(fetchedTasks.tasks);
  }
  async function fetchTasks() {
    let result = await fetch(`${url}/projects/${params.id}`);
    return result.json();
  }
  useEffect(() => getTasks, []);

  let navigate = useNavigate();

  const navEditTask = (_id) => {
    navigate(`/projects/${params.id}/edittask/${_id}`)
  }

  const navCreateTask = () => {
    navigate(`/projects/${params.id}/createtask`)
  }

  return (
    <>
      <div className="btn btn-primary" style={{ padding: '15px 30px', margin: '20px'}} onClick={() => navCreateTask()}>Create new task</div>
      <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {
          tasks.map((task) => (
            <Task key={task.taskId} data={task} navEditTask={navEditTask} taskDelete={PopStateEvent.taskDelete}/>
          ))
        }
      </div>
    </>
  );
}

export default TaskList;