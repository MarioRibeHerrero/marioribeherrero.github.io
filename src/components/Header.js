import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <a href="#home">Portfolio</a>
            </div>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#web">Web</a></li>
              <li><a href="#mobile">Mobile</a></li>
              <li><a href="#design">Design</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1>Your Name</h1>
            <p className="hero-subtitle">Full Stack Developer & Designer</p>
            <p className="hero-description">
              Creating digital experiences that combine beautiful design with powerful functionality.
            </p>
            <div className="hero-actions">
              <a href="#about" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;