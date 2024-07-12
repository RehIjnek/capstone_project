import { useState } from 'react'
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

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Project Manager</a>
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
                <Link className="nav-link" to="/add">
                  Create Project
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
                <Route exact path="/" element={<Home data={data} handleDelete={handleDelete} page={page} setPage={setPage} />} />
                <Route path="/add" element={
                  <RequireAuth>
                    <AddProject />
                  </RequireAuth>
                } />
                <Route path="/Login" element={<LoginForm />} />
              </Routes>
            </AuthProvider>
          </div>
        </div>
      </main>
      <footer className={import.meta.env.VITE_ENVIRONMENT === "development" ? "bg-yellow" : import.meta.env.VITE_ENVIRONMENT === "production" ? "bg-green" : ""}>
        <div><strong>{import.meta.env.VITE_ENVIRONMENT.toUpperCase()}</strong></div>
      </footer>
    </Router>
  )
}

export default App
