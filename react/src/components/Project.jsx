import React from 'react';

const Project = (props) => {
  return (
    <div className="card" style={{ flex: '1', minWidth: '300px', maxWidth: '45%', backgroundColor: 'lightblue' }}>
      <div className="card-body">
        <h5 className="card-title">Project Attributes</h5>
        <div className="card-text">Team Size: {props.data.teamSize}</div>
        <div className="card-text">Budget: {props.data.budget}</div>
        <div className="card-text">Workload: {props.data.workload}</div>
        <div className="card-text">Completion Time: {props.data.completionTime}</div>
      </div>
    </div>
  );
};

export default Project;