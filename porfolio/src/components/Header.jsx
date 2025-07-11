import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container">
          <a className="navbar-brand fw-bold text-dark" href="#portfolio">
            Muggu
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#contact">Contact</a>
              </li>
            </ul>
            <button className="btn btn-outline-dark rounded-pill px-4">
              Get in Touch
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

