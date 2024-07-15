import React from 'react';

const Task = (props) => {
  return (
    <div className="card" style={{ flex: '1', minWidth: '300px', maxWidth: '45%', backgroundColor: 'lightblue' }}>
      <div className="card-body">
        <h5 className="card-title">Task Attributes</h5>
        <div className="card-text">Description: {props.data.description}</div>
        <div className="card-text">Complete Status: {props.data.completeStatus ? "Yes" : "No"}</div>
        <div className="card-text">Person Assigned: {props.data.personAssigned}</div>
        <div className="card-text">Due Date: {props.data.dueDate}</div>
        <div className="card-text">Estimated Duration: {props.data.estimatedDuration}</div>
      </div>
      <div className="card-footer" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button className="btn btn-sm btn-info" onClick={() => props.navEditTask(props.data.taskId)}>Edit</button>
        <button className="btn btn-sm btn-danger" onClick={() => props.taskDelete(props.data.taskId)}>Delete</button>
      </div>
    </div>
  );
}

export default Task;