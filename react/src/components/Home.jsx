import React from "react";
import { useNavigate } from 'react-router-dom';
import Project from "./Project"

const Home = (props) => {
  let navigate = useNavigate();

  const navigateOpen = (id) => {
    navigate(`/projects/${id}`)
  }

  return (
    <>
      <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {
          props.data.map((project) => (
            <div key={project.projId}>
              <Project key={project.projId} data={project} handleDelete={props.handleDelete} navigateOpen={navigateOpen}/>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Home;