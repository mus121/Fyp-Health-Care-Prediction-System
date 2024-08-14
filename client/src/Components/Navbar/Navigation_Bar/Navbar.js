import React from 'react';
import './Navbar1.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {

  const { isAuthenticated, user } = useAuth0();

  const navigate = useNavigate(); // Initialize useNavigate hook

  const Logout = () => {
    window.localStorage.removeItem("isLoggedIn")
    navigate('/')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-back">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span>Healthcare</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className='nav-item active'>
              <Link className="nav-link" to="/home_page">Home <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about"> About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">Health Isues</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Doctors</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/history">User History</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/profile">User Profile</Link>
            </li>
          </ul>
          {
            isAuthenticated && <h2>{user.username}</h2>
          }
          <div className="d-flex">
            <button className="btn  btn-mustafa" onClick={() => Logout()}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
