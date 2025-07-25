import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg ${props.mode === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'} p-3`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">TextUtil{props.name}</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <span className="nav-link disabled">Contact Us</span>
            </li>
          </ul>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              onChange={props.toggleMode}
              checked={props.mode === 'dark'}
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              Enable {props.mode === 'light' ? 'Light' : 'Dark'} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
