import React, { useState, useEffect } from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import { AuthProvider } from "./hooks/AuthContext";

import Home from './components/Home';
import LoginForm from './components/LoginForm';
import RequireAuth from './components/RequireAuth';
import TaskList from "./components/TaskList";
import CreateProject from "./components/CreateProject";
import Predictor from "./components/Predictor";

import EditTask from "./components/EditTask";
import CreateTask from "./components/CreateTask";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/projects");
        if (!response.ok) {
          throw new Error('Data could not be fetched!');
        }
        const json_response = await response.json();
        setData(json_response); // assign JSON response to the data variable.
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (deletionId) => {
    try {
      // Make an API request to delete the sock with the given sockId
      const response = await fetch(`${import.meta.env.VITE_PROJECTS_API_URL}/${deletionId}`, {
        method: 'DELETE',
      });
      console.log(deletionId);
      console.log(response);
      if (!response.ok) {
        throw new Error('Deletion not ok!');
      }
      // Update the state or fetch the updated data from the server
      const updatedData = data.filter(project => project.projId !== deletionId); // Remove the deleted sock from the data array
      setData(updatedData); // Update the state with the updated data
    } catch (error) {
      console.error('Error while deleting project:', error);
    }
  };

  const taskCreate = async () => {
    console.warn("Xander: I haven't implemented this function, 'taskCreate', yet");
  }

  const taskEdit = async () => {
    console.warn("Xander: I haven't implemented this function, 'taskEdit', yet");
  }

  const taskDelete = async (deletionId) => {
    console.warn("Xander: I haven't implemented this function, 'taskDelete', yet");
    try {
      // Make an API request to delete the sock with the given sockId
      const response = await fetch(`${import.meta.env.VITE_PROJECTS_API_URL}/${deletionId}`, {
        method: 'DELETE',
      });
      console.log(deletionId);
      console.log(response);
      if (!response.ok) {
        throw new Error('Deletion not ok!');
      }
      // Update the state or fetch the updated data from the server
      const updatedData = data.filter(project => project.projId !== deletionId); // Remove the deleted sock from the data array
      setData(updatedData); // Update the state with the updated data
    } catch (error) {
      console.error('Error while deleting project:', error);
    }
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Project Manager</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/createProject">
                  Create Project
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/predictor">
                  Predictor
                </Link>
              </li>
            </ul>
            {/* <Search setData={setData} /> */}
          </div>
        </div>
      </nav>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div className="container-fluid">
          <div className="row">
            <hr />
            <AuthProvider>
              <Routes>
                <Route exact path="/" element={<Home data={data} handleDelete={handleDelete}/>} />
                <Route path="/projects/:id" element={<TaskList taskDelete={taskDelete}/>} />
                <Route path="/createProject" element={
                  <RequireAuth>
                    <CreateProject />
                  </RequireAuth>
                } />
                <Route path="/projects/:id/createtask" element = {
                  <RequireAuth>
                    <CreateTask taskCreate={taskCreate}/>
                  </RequireAuth>
                } />
                <Route path="/projects/:pid/edittask/:tid" element = {
                  <RequireAuth>
                    <EditTask taskEdit={taskEdit}/>
                  </RequireAuth>
                } />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/predictor" element={<Predictor />} />
              </Routes>
            </AuthProvider>
          </div>
        </div>
      </main>
    </Router>
  )
}

export default App
