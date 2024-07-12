import React from "react";
import Project from "./Project"

const Home = (props) => {
  return (
    <>
      <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }} onClick={() => navigate(`/api/projects/${project.projId}`)}>
        {
          props.data.map((project) => (
            <Project key={project.projId} data={project} />
          ))
        }
      </div>
    </>
  )
}

export default Home;