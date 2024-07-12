import React from "react";
import { useNavigate } from 'react-router-dom';
import Project from "./Project"

const Home = (props) => {
  let navigate = useNavigate();
  return (
    <>
      <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {
          props.data.map((project) => (
            <div key={project.projId} onClick={() => navigate(`/projects/${project.projId}`)}>
              <Project key={project.projId} data={project} />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Home;